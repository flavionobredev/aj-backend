import { Supplier } from '@/domain/entity/supplier';
import { SupplierRepository } from '../protocols/supplier-repository';
import { SupplierModel } from '../schemas/supplier';

export class DbSupplierRepository implements SupplierRepository {
  private readonly model = SupplierModel;
  constructor() {}

  async createSupplier(supplier: Supplier) {
    return await this.model.create(supplier);
  }
}
