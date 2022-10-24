import { Params } from './params';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Results } from "src/app/search/search-results/results";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  results!: Results;
  params!: Params;
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.results$.subscribe((results) => {
      this.results = results;
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      this.params = params;
    });
  }

  ngOnInit(): void {
    this.searchService.getResults();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
