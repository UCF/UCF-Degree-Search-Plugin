import { Results } from 'src/app/search/search-results/results';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() results!: Results;

  constructor() { }

  ngOnInit(): void {
  }

}
