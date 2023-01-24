export interface ProgramType {
  name: string;
  plural: string;
  slug: string;
  count: number;
  children: Child[];
}

export interface Child {
  name: string;
  plural: string;
  slug: string;
  count: number;
  children: any[];
}
