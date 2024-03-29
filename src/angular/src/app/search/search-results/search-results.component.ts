import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { Subscription } from "rxjs";

import { Results } from "./results";
import { Params } from "./params";
import { SearchService } from "./search.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild("searchResultsContainer") searchResultsContainer: ElementRef | undefined;
  @ViewChildren("degreeLinks") degreeLinks: QueryList<ElementRef> | undefined;

  results!: Results;
  prevResults!: Results;
  params!: Params;
  isLoading = true;
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.results$.subscribe((results) => {
      this.results = results;
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      this.params = params;
    });

    this.subscription = this.searchService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.degreeLinks?.changes.subscribe(() => {
      setTimeout(() => {
        if (
          this.degreeLinks &&
          this.degreeLinks.first &&
          this.degreeLinks.first.nativeElement
        ) {
          if(this.searchResultsContainer?.nativeElement.offsetWidth > 600) {
            this.degreeLinks.first.nativeElement.focus();
          }
        }
      });
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
