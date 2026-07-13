export interface College {
  name: string;
  slug: string;
}

export interface Subplan {
  id?: number;
  title: string;
  nameShort: string;
  url: string;
  hours: string;
  type: string;
  excerpt: string;
  colleges: College[];
  subplans: Subplan[];
}

export interface Degree {
  id?: number;
  title: string;
  nameShort: string;
  url: string;
  hours: string;
  type: string;
  excerpt: string;
  colleges: College[];
  subplans: Subplan[];
}

export interface Type {
  alias: string;
  count: number;
  degrees: Degree[];
}

export interface Results {
  count: number;
  totalPosts: number;
  startIndex: number;
  endIndex: number;
  currentPage: number;
  totalPages: number;
  types: Type[];
}
