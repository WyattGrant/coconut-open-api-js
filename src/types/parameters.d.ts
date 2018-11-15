export interface ServiceParameters {
  assigned?: boolean;
  category?: number | string;
  location?: number | string;
  user?: number | string;
}

export interface UserParameters {
  assigned?: boolean;
  service?: number | number[] | string | string[];
  location?: number | string;
}
