import { ProgramType } from "./program-type";
import { SearchService } from "./../search-results/search.service";
import { Component, OnInit } from "@angular/core";
import { ProgramTypeService } from "./program-type.service";

@Component({
  selector: "app-program-types",
  templateUrl: "./program-types.component.html",
  styleUrls: ["./program-types.component.scss"],
})
export class ProgramTypesComponent implements OnInit {
  isLoading: boolean = true;
  programTypes!: ProgramType[];
  selectedParent!: string;
  selectedProgramType!: string;
  isProgamTypesOpen: boolean = false;

  constructor(
    private programTypeService: ProgramTypeService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.programTypeService
      .getprogramTypes()
      .subscribe((data: ProgramType[]) => {
        this.programTypes = data;
        this.isLoading = false;
      });
  }

  toggleProgramTypes() {
    this.isProgamTypesOpen = this.isProgamTypesOpen ? false : true;
  }

  setProgramType(
    programType: string,
    programTypeFullName: string,
    isParent: boolean
  ) {
    if (isParent) this.selectedParent = programType;
    this.selectedProgramType = programType;
    this.searchService.setProgramType(programType, programTypeFullName);
  }
}
