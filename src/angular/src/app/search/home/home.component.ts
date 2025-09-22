import { NavigationStart, Router } from "@angular/router";
import { SearchService } from "./../search-results/search.service";
import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Results } from "./../search-results/results";
import { Params } from "./../search-results/params";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnDestroy {
  params!: Params;
  results!: Results;
  subscription: Subscription;
  isLoading = true;
  isFilterVisible = false;

  constructor(private searchService: SearchService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!!event.url && event.url.match(/^\/#!/)) {
          this.router.navigate([event.url.replace("/#!", "")], {
            queryParamsHandling: 'preserve'
          });
        }
      }
    });

    this.subscription = this.searchService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    this.subscription = this.searchService.results$.subscribe((results) => {
      this.results = results;
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      this.params = params;
    });
  }

  toggleFilters() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
