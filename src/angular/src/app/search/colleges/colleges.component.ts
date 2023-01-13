import { SearchService } from "./../search-results/search.service";
import { Component, OnInit } from "@angular/core";
import { College } from "src/app/search/colleges/college";
import { CollegeService } from "./college.service";

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
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.collegeService.getColleges().subscribe((data: College[]) => {
      this.colleges = data;
      this.isLoading = false;
    });
  }

  setCollege(college: string, collegeFullName: string) {
    this.selectedCollege = college;
    this.searchService.gotoPage(1, false);
    this.searchService.setCollege(college, collegeFullName);
  }
}
