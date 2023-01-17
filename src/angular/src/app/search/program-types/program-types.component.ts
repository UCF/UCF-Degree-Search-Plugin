import { SearchService } from "./../search-results/search.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProgramTypeService } from "./program-type.service";

@Component({
  selector: "app-program-types",
  templateUrl: "./program-types.component.html",
  styleUrls: ["./program-types.component.scss"],
})
export class ProgramTypesComponent implements OnInit {
  isLoading: boolean = true;
  programTypes!: any[];
  selectedProgramType!: string;
  subscription: Subscription;
  isProgramTypeOpen: boolean = false;

  constructor(
    private programTypeService: ProgramTypeService,
    private searchService: SearchService
  ) {
    this.subscription = this.programTypeService.programTypes$.subscribe(
      (programTypes) => {
        this.programTypes = programTypes;
      }
    );
  }

  ngOnInit(): void {
    this.programTypeService.getprogramTypes();
  }

  setProgramType(programType: string, programTypeFullName: string, isParent: boolean) {
    if(isParent) this.selectedProgramType = programType;
    this.searchService.gotoPage(1, false);
    this.searchService.setProgramType(programType, programTypeFullName);
  }
}
