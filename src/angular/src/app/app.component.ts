import { Results } from "src/app/search/search-results/results";
import { Subscription } from "rxjs";
import { Params } from "./search/search-results/params";
import { OnDestroy, ViewChild } from "@angular/core";
import { Component } from "@angular/core";
import { SearchService } from "./search/search-results/search.service";
import { ProgramTypesComponent } from "./search/program-types/program-types.component";
import { CollegesComponent } from "./search/colleges/colleges.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  @ViewChild(ProgramTypesComponent) programTypesComponent:
    | ProgramTypesComponent
    | undefined;
  @ViewChild(CollegesComponent) collegesComponent:
    | CollegesComponent
    | undefined;

  params!: Params;
  results!: Results;
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.results$.subscribe((results) => {
      this.results = results;
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      this.params = params;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
