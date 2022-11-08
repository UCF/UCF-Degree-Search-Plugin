import { Params } from "./../search-results/params";
import { Results } from "src/app/search/search-results/results";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() results: Results | undefined;

  pages!: Array<number>;
  width!: number;
  params!: Params;

  constructor() {}

  ngOnInit(): void {
    this.pagination();
  }

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
    if (this.results) {
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
  }
}
