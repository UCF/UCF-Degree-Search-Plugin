import { NavigationEnd, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
import { SearchService } from "../search-results/search.service";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
  searchField!: FormControl;

  constructor(private searchService: SearchService, private router: Router) {
    this.router.events.subscribe((router: any) => {
      if (router instanceof NavigationEnd) {
        setTimeout(() => {
          if (router.url === "/") {
            this.searchService.getResults();
          } else {
            this.searchField.setValue(router.url.replace("/", ""));
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        filter((text) => text.length > 2),
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        if (query) {
          this.searchService.gotoPage(1, false);
          this.searchService.setQuery(query);
          this.router.navigate([query]);
        }
      });
  }
}
