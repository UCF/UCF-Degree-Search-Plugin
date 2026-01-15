import { NavigationEnd, Router } from "@angular/router";
import { SearchService } from "./../search-results/search.service";
import { Component, OnInit } from "@angular/core";
import { ProgramTypeService } from "./program-type.service";
import { ProgramType } from "src/app/search/program-types/program-type";

@Component({
  selector: "app-program-types",
  templateUrl: "./program-types.component.html",
  styleUrls: ["./program-types.component.scss"],
})
export class ProgramTypesComponent implements OnInit {
  isLoading: boolean = true;
  programTypes!: ProgramType[];
  selectedProgramType!: string;
  isProgramTypeOpen: boolean = false;

  constructor(
    private programTypeService: ProgramTypeService,
    private searchService: SearchService,
    private router: Router
  ) {
    // select program type from route
    let subscription = this.router.events.subscribe((router: any) => {
      if (router instanceof NavigationEnd) {
        setTimeout(() => {
          let urlArray = router.url.split("/");

          if (urlArray?.length) {
            let collegeIndex = urlArray.indexOf("college");
            if (collegeIndex !== -1) urlArray.splice(collegeIndex, 2);

            let searchIndex = urlArray.indexOf("search");
            if (searchIndex !== -1) urlArray.splice(searchIndex, 2);

            let programType = urlArray[1];

            if (programType && programType.startsWith('?')) programType = '';

            if (programType && programType !== "") {
              this.selectedProgramType = programType;
              this.searchService.setProgramType(this.selectedProgramType, "");
            } else {
              this.searchService.setProgramType("", "");
            }
          }

          subscription.unsubscribe();
        });
      }
    });
  }

  ngOnInit(): void {
    this.programTypeService
      .getprogramTypes()
      .subscribe((data: ProgramType[]) => {
        if (data.length) {
          data[1].children.splice(0, 0, data[1].children.splice(2, 1)[0]);
          this.programTypes = data;
          this.isLoading = false;
        }
      });
  }

  isProgramTypeVisible(programType: ProgramType) {
    let retval = false;

    if (programType.slug === this.selectedProgramType) {
      retval = true;
    } else {
      programType.children.forEach((child) => {
        if (child.slug === this.selectedProgramType) {
          retval = true;
        }
      });
    }

    return retval;
  }

  isProgramTypeChecked(programType: ProgramType): boolean {
    if (this.selectedProgramType === programType.slug) {
      this.searchService.updateProgramType(programType.slug, programType.name);
      return true;
    } else {
      return false;
    }
  }

  setProgramType(programType: string, programTypeFullName: string) {
    this.selectedProgramType = programType;
    this.searchService.gotoPage(1, false);
    this.searchService.setProgramType(programType, programTypeFullName);
  }
}
