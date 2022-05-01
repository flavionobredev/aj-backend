import { Supplier } from '@/domain/entity/supplier';

export interface AddSupplier {
  createSupplier(supplier: AddSupplier.Params): Promise<AddSupplier.Result>;
}

export namespace AddSupplier {
  export type Params = Supplier;
  export type Result = Params;
}
