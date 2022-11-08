import { Params } from './../search-results/params';
import { Subscription } from 'rxjs';
import { Results } from 'src/app/search/search-results/results';
import { SearchService } from "./../search-results/search.service";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit, OnDestroy {

  pages!: Array<number>;
  width!: number;
  results!: Results;
  params!: Params;
  subscription: Subscription;

  constructor(private searchService: SearchService) {
    this.subscription = this.searchService.results$.subscribe((results) => {
      console.log('results: ', results);
      this.results = results;
      this.pagination();
    });

    this.subscription = this.searchService.params$.subscribe((params) => {
      console.log('params: ', params);
      this.params = params;
    });
  }

  ngOnInit(): void {}

  nextPage() {
    throw new Error("Method not implemented.");
  }
  previousPage() {
    throw new Error("Method not implemented.");
  }
  goToPage(page: number) {
    throw new Error("Method not implemented.");
  }

  pagination() {
    console.log('pagination');
    this.width = 1000; // TODO (container.nativeElement as HTMLElement).offsetWidth;
    let pagePad = 4; // (container.nativeElement as HTMLElement).offsetWidth < 768 ? 2 : 4;

    let startPage =
      this.results.currentPage - pagePad < 1
        ? 1
        : this.results.currentPage - pagePad;
    let endPage =
      this.results.currentPage + pagePad > this.results.totalPages
        ? this.results.totalPages
        : this.results.currentPage + pagePad;

    // Reset the array
    this.pages = new Array<number>();

    for (var i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }

    console.log("pages: ", this.pages);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
