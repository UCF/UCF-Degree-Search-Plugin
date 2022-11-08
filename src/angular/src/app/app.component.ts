import { Results } from "src/app/search/search-results/results";
import { Subscription } from "rxjs";
import { Params } from "./search/search-results/params";
import { OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import { SearchService } from "./search/search-results/search.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  params!: Params;
  results!: Results;
  subscription: Subscription;
  isLoading = true;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.subscription = this.searchService.results$.subscribe((results) => {
      console.log(results);
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
