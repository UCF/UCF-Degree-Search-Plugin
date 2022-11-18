import { Params } from "./params";
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";

import { Results } from "src/app/search/search-results/results";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  @ViewChild('firstLink') firstLink: ElementRef | undefined;

  results!: Results;
  params!: Params;
  isLoading = true;
  subscription: Subscription;

  constructor(private searchService: SearchService, private element: ElementRef) {
    this.subscription = this.searchService.results$.subscribe((results) => {
      this.results = results;
      this.setFocus();
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      this.params = params;
    });

    this.subscription = this.searchService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.searchService.getResults();
  }

  setFocus() {
    // TODO Set focus without using setTimeout
    setTimeout(() => {
      this.element.nativeElement.querySelectorAll('.stretched-link')[0].focus();
    }, 1000);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
