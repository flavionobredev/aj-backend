import { AddSupplier } from '@/domain/usecases/supplier/add-supplier';

export interface AddSupplierRepository {
  createSupplier(
    supplier: AddSupplierRepository.Params,
  ): Promise<AddSupplierRepository.Result>;
}

export namespace AddSupplierRepository {
  export type Params = AddSupplier.Params;
  export type Result = Params & { _id: string };
}
