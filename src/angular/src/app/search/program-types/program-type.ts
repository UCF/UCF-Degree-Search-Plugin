export interface ProgramType {
    name: string;
    plural: string;
    slug: string;
    count: number;
    children: Child[];
  }

  interface Child {
    name: string;
    plural: string;
    slug: string;
    count: number;
    children: any[];
  }
