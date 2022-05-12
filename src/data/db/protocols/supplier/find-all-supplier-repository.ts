import { Supplier } from '@/domain/entity/supplier';
import { Pagination } from '../pagination';

export interface FindAllSupplierRepository {
  findAllSupplier(
    params: FindAllSupplierRepository.Params,
  ): Promise<FindAllSupplierRepository.Result>;
}

export namespace FindAllSupplierRepository {
  export type Params = {
    projection: string | object;
    page: number;
    limit: number;
  };

  export type Result = Pagination.Result<Supplier>;
}
