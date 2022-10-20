import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgramTypeService } from './program-type.service';

@Component({
  selector: 'app-program-types',
  templateUrl: './program-types.component.html',
  styleUrls: ['./program-types.component.scss']
})
export class ProgramTypesComponent implements OnInit {

  programTypes!: any[];
  subscription: Subscription;

  constructor(private programTypeService: ProgramTypeService) {
    this.subscription = this.programTypeService.programTypes$.subscribe(
      programTypes => {
        this.programTypes = programTypes;
      }
    );
  }

  ngOnInit(): void {
    this.programTypeService.getprogramTypes();
  }

}
