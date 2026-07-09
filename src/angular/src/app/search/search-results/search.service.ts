import { NavigationEnd, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { Subject, Subscription, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { Results, Type, Degree } from "./results";
import { Params } from "./params";
import { CollegeService } from "../colleges/college.service";

/**
 * Raw program item as returned by {remote_path}/programs/search/.
 * Only the fields consumed by the UI are typed here.
 */
interface RemoteProgram {
  id: number;
  name: string;
  primary_profile_url: string;
  credit_hours: number | null;
  career: string;
  level: string;
  excerpt: string;
  colleges: { name?: string; full_name?: string; short_name?: string }[];
  // Present (with the parent's id) when this program is a subplan/track.
  parent_program: { id: number } | null;
}

interface RemoteSearchResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: RemoteProgram[];
}

@Injectable({
  providedIn: "root",
})
export class SearchService {
  subscription: Subscription;

  isLoading = true;
  router: Router | undefined;
  query: string = "init";
  results!: Results;
  params: Params = {
    selectedCollege: "init",
    collegeFullName: "",
    selectedProgramType: "init",
    programTypeFullName: "",
    limit: 25,
    page: 1,
  };

  // Maps a college slug (used in routes/UI) to the numeric id the search
  // service expects for its `colleges` filter param.
  private collegeSlugToId: { [slug: string]: number } = {};

  // Maps a UI program-type slug to the search service career/level filter
  // ids. career: 1=Undergraduate, 2=Graduate, 3=Professional.
  // level: 1=Bachelors, 2=Masters, 3=Certificate, 4=Doctoral, 5=Specialist,
  // 6=Professional, 7=Minor.
  private programTypeFilters: {
    [slug: string]: { career?: number; level?: number };
  } = {
    "undergraduate-program": { career: 1 },
    "graduate-program": { career: 2 },
    "professional-program": { career: 3 },
    bachelor: { level: 1 },
    minor: { level: 7 },
    "undergraduate-certificate": { career: 1, level: 3 },
    master: { level: 2 },
    doctorate: { level: 4 },
    specialist: { level: 5 },
    "graduate-certificate": { career: 2, level: 3 },
  };

  // Display order for grouped result types (the legacy types[] ordering).
  private typeOrder: string[] = [
    "bachelor",
    "minor",
    "undergraduate-certificate",
    "master",
    "doctorate",
    "specialist",
    "graduate-certificate",
    "professional-program",
  ];

  constructor(
    private http: HttpClient,
    router: Router,
    private collegeService: CollegeService
  ) {
    this.router = router;

    // Preload the college slug -> id lookup so searches can translate the
    // slug-based route/UI selection into the API's id-based filter.
    this.collegeService.getColleges().subscribe((colleges) => {
      colleges.forEach((c) => {
        this.collegeSlugToId[c.slug] = c.id;
      });
    });

    // get search results if router url is empty
    let subscription = this.router.events.subscribe((router: any) => {
      if (router instanceof NavigationEnd) {
        setTimeout(() => {
          if (router.url === "") {
            this.getResults();
          }

          subscription.unsubscribe();
        });
      }
    });

    this.subscription = this.query$.subscribe((query) => {
      this.query = decodeURIComponent(query);
      this.getResults();
    });

    this.subscription = this.params$.subscribe((params) => {
      this.params = params;
      this.getResults();
    });
  }

  private resultsSource = new Subject<Results>();
  private querySource = new Subject<string>();
  private paramsSource = new Subject<Params>();
  private isLoadingSource = new Subject<boolean>();

  results$ = this.resultsSource.asObservable();
  query$ = this.querySource.asObservable();
  params$ = this.paramsSource.asObservable();
  isLoading$ = this.isLoadingSource.asObservable();

  // @ts-ignore
  private searchUrl = UCF_DEGREE_SEARCH_ANGULAR.remote_path + "/programs/search/";

  // A default query string (e.g. "online=false&active=true") configured in the
  // plugin settings and localized onto the global. Parsed via HttpParams'
  // fromString and used as the base of every search request so a component-set
  // param of the same name overrides it. Leading "?"/"&" are tolerated.
  private defaultParams: string = (
    // @ts-ignore
    (typeof UCF_DEGREE_SEARCH_ANGULAR !== "undefined" &&
      // @ts-ignore
      UCF_DEGREE_SEARCH_ANGULAR.default_params) ||
    ""
  ).replace(/^[?&]+/, "");

  setQuery(query: string): void {
    this.query = query;
    this.querySource.next(query);
    this.setRoute();
  }

  setProgramType(programType: string, programTypeFullName: string): void {
    this.params.selectedProgramType = programType;
    this.params.programTypeFullName = programTypeFullName;
    this.paramsSource.next(this.params);
    this.setRoute();
  }

  setCollege(college: string, collegeFullName: string): void {
    this.params.selectedCollege = college;
    this.params.collegeFullName = collegeFullName;
    this.paramsSource.next(this.params);
    this.setRoute();
  }

  updateCollege(college: string, collegeFullName: string): void {
    this.params.selectedCollege = college;
    this.params.collegeFullName = collegeFullName;
  }

  updateProgramType(programType: string, programTypeFullName: string): void {
    this.params.selectedProgramType = programType;
    this.params.programTypeFullName = programTypeFullName;
  }

  setRoute(): void {
    if (
      this.params.selectedCollege !== "init" &&
      this.params.selectedProgramType !== "init" &&
      this.query !== "init"
    ) {
      let programTypeRoute =
        this.params.selectedProgramType &&
        this.params.selectedProgramType !== "init"
          ? [this.params.selectedProgramType]
          : [];
      let collegeRoute =
        this.params.selectedCollege && this.params.selectedCollege !== "init"
          ? ["college", this.params.selectedCollege]
          : [];
      let searchRoute =
        this.query && this.query !== "init" ? ["search", this.query] : [];

      if (this.router) {
        this.router.navigate([
          ...programTypeRoute,
          ...collegeRoute,
          ...searchRoute
        ], {
          queryParamsHandling: 'preserve'
        });
      }
    }
  }

  setPage(page: number): void {
    this.params.page = this.params.page + page;
    this.paramsSource.next(this.params);
  }

  gotoPage(page: number, refresh: boolean): void {
    this.params.page = page;
    if (refresh) {
      this.paramsSource.next(this.params);
    }
  }

  getResults(): void {
    if (
      this.params.selectedCollege !== "init" &&
      this.params.selectedProgramType !== "init" &&
      this.query !== "init"
    ) {
      const limit = this.params.limit;
      const page = this.params.page;

      // Seed from the configured default params so component-set params of the
      // same name override them below.
      let httpParams = new HttpParams({ fromString: this.defaultParams })
        .set("search", this.query === "init" ? "" : this.query)
        .set("limit", limit)
        .set("offset", (page - 1) * limit);

      // Program type slug -> career/level filter ids. Omitted when no type is
      // selected so the API returns every program type.
      const typeFilter = this.programTypeFilters[this.params.selectedProgramType];
      if (typeFilter) {
        if (typeFilter.career) {
          httpParams = httpParams.set("career", typeFilter.career);
        }
        if (typeFilter.level) {
          httpParams = httpParams.set("level", typeFilter.level);
        }
      }

      // College slug -> id. Omitted when "View All" / nothing is selected.
      const collegeId = this.collegeSlugToId[this.params.selectedCollege];
      if (collegeId) {
        httpParams = httpParams.set("colleges", collegeId);
      }

      this.isLoadingSource.next(true);
      this.resultsSource.next(this.results);

      this.http
        .get<RemoteSearchResults>(this.searchUrl, { params: httpParams })
        .pipe(catchError(this.handleError))
        .subscribe((data: RemoteSearchResults) => {
          this.isLoadingSource.next(false);
          this.results = this.mapResults(data, page, limit);
          this.resultsSource.next(this.results);
          this.updateHeader();
        });
    }
  }

  /**
   * Translates the search service's flat, offset-paginated response into the
   * legacy grouped {types -> degrees} shape the UI renders.
   *
   * The API returns subplans both as their own rows (carrying parent_program)
   * and inline on the parent. Here we attach each subplan to its parent and
   * keep it out of the top-level list. A subplan whose parent is not on the
   * current page is promoted to a top-level row.
   */
  private mapResults(
    data: RemoteSearchResults,
    page: number,
    limit: number
  ): Results {
    const programs = data.results || [];
    const presentIds = new Set(programs.map((p) => p.id));

    // Group subplans (programs with a present parent) under their parent id.
    const subplansByParent: { [parentId: number]: RemoteProgram[] } = {};
    programs.forEach((program) => {
      const parentId = program.parent_program?.id;
      if (parentId && presentIds.has(parentId)) {
        (subplansByParent[parentId] =
          subplansByParent[parentId] || []).push(program);
      }
    });

    // Top-level degrees: everything that isn't a subplan of a present parent.
    const topLevel = programs.filter((program) => {
      const parentId = program.parent_program?.id;
      return !(parentId && presentIds.has(parentId));
    });

    const typeMap: { [slug: string]: Type } = {};

    topLevel.forEach((program) => {
      const slug = this.slugForProgram(program);

      if (!typeMap[slug]) {
        typeMap[slug] = { alias: slug, count: 0, degrees: [] };
      }

      const degree = this.mapDegree(program, slug);
      degree.subplans = (subplansByParent[program.id] || []).map((sub) =>
        this.mapDegree(sub, this.slugForProgram(sub))
      );

      typeMap[slug].degrees.push(degree);
      typeMap[slug].count++;
    });

    const offset = (page - 1) * limit;

    return {
      // Note: data.count includes subplans, so it may exceed the number of
      // visible top-level rows. It still drives pagination consistently.
      count: topLevel.length,
      totalPosts: data.count,
      startIndex: data.count ? offset + 1 : 0,
      endIndex: offset + programs.length,
      currentPage: page,
      totalPages: Math.ceil(data.count / limit),
      types: this.typeOrder
        .filter((slug) => typeMap[slug])
        .map((slug) => typeMap[slug]),
    };
  }

  /**
   * Derives the legacy program-type slug for a program from its level and
   * career. Certificates are split into undergraduate/graduate variants by
   * career to match the legacy taxonomy.
   */
  private slugForProgram(program: RemoteProgram): string {
    switch (program.level) {
      case "Bachelors":
        return "bachelor";
      case "Masters":
        return "master";
      case "Doctoral":
        return "doctorate";
      case "Specialist":
        return "specialist";
      case "Minor":
        return "minor";
      case "Certificate":
        return program.career === "Graduate"
          ? "graduate-certificate"
          : "undergraduate-certificate";
      case "Professional":
        return "professional-program";
      default:
        // Fall back to the career grouping for any unmapped level.
        if (program.career === "Graduate") return "master";
        if (program.career === "Professional") return "professional-program";
        return "bachelor";
    }
  }

  /**
   * Maps a single search service program into the legacy Degree shape.
   */
  private mapDegree(program: RemoteProgram, slug: string): Degree {
    return {
      id: program.id,
      title: program.name,
      nameShort: program.name,
      url: program.primary_profile_url,
      hours: program.credit_hours ? String(program.credit_hours) : "",
      type: slug,
      excerpt: program.excerpt || "",
      colleges: (program.colleges || []).map((c) => ({
        name: c.name || c.full_name || "",
        slug: "",
      })),
      // Subplans are fetched on demand via ProgramService.getProgram(id).
      subplans: [],
    };
  }

  updateHeader() {
    const h1Tag = document.getElementsByClassName("header-title")[0];

    if (h1Tag) {
      let program =
        this.params.programTypeFullName !== ""
          ? this.params.programTypeFullName
          : "";
      const college =
        this.params.collegeFullName !== ""
          ? " in " + this.params.collegeFullName
          : "";

      const subTitleTag = document.getElementsByClassName("header-subtitle");

      if (subTitleTag && subTitleTag[0] && subTitleTag[0].parentNode !== null) {
        subTitleTag[0].parentNode.removeChild(subTitleTag[0]);
      }

      if (program !== "" || college !== "") {
        const spanTag = document.createElement("span");

        let possesive =
          program === "Bachelor" || program === "Master" ? "'s" : "";

        program = program.replace("Program", "").replace("Professional", "MD");
        program = program + possesive + " Degrees ";

        spanTag.classList.add(
          "degree-search-secondary-heading",
          "header-subtitle",
          "d-inline-block",
          "bg-inverse"
        );
        spanTag.innerText =
          "Find " + program + college.replace("College of ", "") + " at UCF.";

        h1Tag.after(spanTag);
      }
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred: ", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      new Error("Unknown error. Check the data source URL.");
    });
  }
}
