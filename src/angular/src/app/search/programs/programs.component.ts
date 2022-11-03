import { SearchService } from './../search-results/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  selectedProgramType: string = '';

  constructor(private searchService: SearchService) { }

  setProgramType(
    programType: string,
    programTypeFullName: string
  ) {
    this.selectedProgramType = programType;
    this.searchService.setProgramType(programType, programTypeFullName);
  }

  ngOnInit(): void { }

}
