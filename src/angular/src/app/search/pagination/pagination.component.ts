import { SearchService } from "./../search-results/search.service";
import { Params } from "./../search-results/params";
import { Results } from "src/app/search/search-results/results";
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @Input() results: Results | undefined;
  @ViewChild("paginationContainer") paginationContainer: ElementRef | undefined;

  pages!: Array<number>;
  width!: number;
  params!: Params;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.paginationContainer) {
        var width = this.paginationContainer.nativeElement.offsetWidth;
        this.pagination(width);
      }
    });
  }

  setPage(increment: number) {
    this.searchService.setPage(increment);
  }

  goToPage(page: number) {
    if (page !== this.results?.currentPage)
      this.searchService.gotoPage(page, true);
  }

  pagination(width: number) {
    if (this.results) {
      let pagePad = width < 600 ? 2 : 4;

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
    }
  }
}
