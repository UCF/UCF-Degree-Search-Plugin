import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { SearchService } from '../search-results/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchField!: FormControl;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe(query => {
        if (query && query.length > 2) {
          this.searchService.setQuery(query);
        }
      });
  }

}
