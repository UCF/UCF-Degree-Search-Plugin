import { SearchService } from "./../search-results/search.service";
import { Component, OnInit } from "@angular/core";
import { College } from "src/app/search/colleges/college";
import { CollegeService } from "./college.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-colleges",
  templateUrl: "./colleges.component.html",
  styleUrls: ["./colleges.component.scss"],
})
export class CollegesComponent implements OnInit {
  isLoading: boolean = true;
  colleges!: College[];
  selectedCollege!: string;
  isCollegesOpen: boolean = false;

  constructor(
    private collegeService: CollegeService,
    private searchService: SearchService,
    private router: Router
  ) {
    // select college from route
    let subscription = this.router.events.subscribe((router: any) => {
      if (router instanceof NavigationEnd) {
        setTimeout(() => {
          let urlArray = router.url.split("/");
          let collegeIndex = urlArray.indexOf("college");

          if (collegeIndex !== -1) {
            this.selectedCollege = urlArray[collegeIndex + 1];
            this.searchService.setCollege(this.selectedCollege, "");
          } else {
            this.searchService.setCollege("", "");
          }

          subscription.unsubscribe();
        });
      }
    });
  }

  ngOnInit(): void {
    this.collegeService.getColleges().subscribe((data: College[]) => {
      this.colleges = data;
      this.isLoading = false;
    });
  }

  isCollegeChecked(college: College): boolean {
    if (this.selectedCollege === college.slug) {
      this.searchService.updateCollege(college.slug, college.fullname);
      return true;
    } else {
      return false;
    }
  }

  setCollege(college: string, collegeFullName: string) {
    this.selectedCollege = college;
    this.searchService.gotoPage(1, false);
    this.searchService.setCollege(college, collegeFullName);
  }
}
