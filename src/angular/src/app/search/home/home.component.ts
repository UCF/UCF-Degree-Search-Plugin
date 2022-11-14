import { SearchService } from './../search-results/search.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Results } from './../search-results/results';
import { Params } from './../search-results/params';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  params!: Params;
  results!: Results;
  subscription: Subscription;
  isLoading = true;

  constructor(private searchService: SearchService) {
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

  ngOnInit(): void {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
