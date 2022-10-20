import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTypesComponent } from './program-types.component';

describe('ProgramTypesComponent', () => {
  let component: ProgramTypesComponent;
  let fixture: ComponentFixture<ProgramTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
