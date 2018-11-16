export interface LocationResource extends Pageable {
  assigned(assigned: boolean): this;

  containing(user: number | string): this;

  providing(services: number | number[] | string | string[]): this;
}

export interface Pageable extends Sortable {
  on(page: number): this;

  take(limit: number): this;
}

export interface QuestionResource extends Pageable {
  for(services: number | number[] | string | string[]): this;
}

export interface Resource {
  get(): Promise<any>;
}

export interface ServiceResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  by(user: number | string): this;

  in(category: number | string): this;
}

export interface Sortable extends Resource {
  sortBy(sortable: string): this;
}

export interface UserResource extends Pageable {
  assigned(assigned: boolean): this;

  at(location: number | string): this;

  performing(services: number | number[] | string | string[]): this;
}
