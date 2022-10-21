import { TestBed } from '@angular/core/testing';

import { ProgramTypeService } from './program-type.service';

describe('ProgramTypeService', () => {
  let service: ProgramTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
