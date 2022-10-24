import { ProgramType } from './program-type';
import { SearchService } from './../search-results/search.service';
import { Component, OnInit } from '@angular/core';
import { ProgramTypeService } from './program-type.service';

@Component({
  selector: 'app-program-types',
  templateUrl: './program-types.component.html',
  styleUrls: ['./program-types.component.scss']
})
export class ProgramTypesComponent implements OnInit {

  programTypes!: ProgramType[];
  selectedParent!: string;

  constructor(private programTypeService: ProgramTypeService, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.programTypeService.getprogramTypes()
      .subscribe((data: ProgramType[]) => {
        this.programTypes = data;
      });
  }

  setProgramType(programType: string, isParent: boolean) {
    if(isParent) this.selectedParent = programType;
    this.searchService.setProgramType(programType);
  }

}
