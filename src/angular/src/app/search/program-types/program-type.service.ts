import { ProgramType } from './program-type';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

/**
 * The UCF program-type taxonomy. The search service has no program-types
 * endpoint, and this taxonomy is effectively static, so it is provided here.
 * Slugs map to career/level filters in SearchService (see programTypeFilters).
 * Counts are not displayed in the UI and are therefore omitted (0).
 */
const PROGRAM_TYPES: ProgramType[] = [
  {
    name: 'Undergraduate Program',
    plural: 'Undergraduate Programs',
    slug: 'undergraduate-program',
    count: 0,
    children: [
      { name: 'Bachelor', plural: 'Bachelors', slug: 'bachelor', count: 0, children: [] },
      { name: 'Minor', plural: 'Minors', slug: 'minor', count: 0, children: [] },
      { name: 'Undergraduate Certificate', plural: 'Undergraduate Certificates', slug: 'undergraduate-certificate', count: 0, children: [] },
    ],
  },
  {
    name: 'Graduate Program',
    plural: 'Graduate Programs',
    slug: 'graduate-program',
    count: 0,
    children: [
      { name: 'Doctorate', plural: 'Doctorates', slug: 'doctorate', count: 0, children: [] },
      { name: 'Graduate Certificate', plural: 'Graduate Certificates', slug: 'graduate-certificate', count: 0, children: [] },
      { name: 'Master', plural: 'Masters', slug: 'master', count: 0, children: [] },
      { name: 'Specialist', plural: 'Specialists', slug: 'specialist', count: 0, children: [] },
    ],
  },
  {
    name: 'Professional Program',
    plural: 'Professional Programs',
    slug: 'professional-program',
    count: 0,
    children: [],
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProgramTypeService {

  constructor() { }

  private programTypesSource = new Subject<ProgramType[]>();

  programTypes$ = this.programTypesSource.asObservable();

  getprogramTypes(): Observable<ProgramType[]> {
    // Return a deep copy so consumers (which mutate child order) don't alter
    // the shared constant.
    return of(JSON.parse(JSON.stringify(PROGRAM_TYPES)));
  }

}
