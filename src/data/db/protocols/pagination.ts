export interface Pagination<T = any> {
  paginate(params: Pagination.Params): Promise<Pagination.Result<T>>;
}

export namespace Pagination {
  export type Params<T = any> = {
    query: T;
    projection: string | object
    sort: object;
    page: number;
    limit: number;
  };

  export type Result<T = any> = {
    content: T[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    size: number;
    page: number;
    empty: boolean;
  };
}
