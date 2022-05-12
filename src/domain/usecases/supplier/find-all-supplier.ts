import { Pagination } from '@/data/db/protocols/pagination';
import { Supplier } from '@/domain/entity/supplier';

export interface FindAllSupplier {
  findAllSupplier(
    params: FindAllSupplier.Params,
  ): Promise<FindAllSupplier.Result>;
}

export namespace FindAllSupplier {
  export type Params = {
    limit: number;
    page: number;
    projection: string | object;
  };
  export type Result = Pagination.Result<Supplier>;
}
