import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsLabelComponent } from './programs-label.component';

describe('ProgramsLabelComponent', () => {
  let component: ProgramsLabelComponent;
  let fixture: ComponentFixture<ProgramsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
