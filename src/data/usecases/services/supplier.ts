import { AddSupplier } from '@/domain/usecases/supplier/add-supplier';
import { SupplierRepository } from '@/infra/database/mongodb/protocols/supplier-repository';

interface Service extends AddSupplier {}

export class SupplierService implements Service {
  constructor(private readonly supplierRepository: SupplierRepository) {}

  async createSupplier(supplier: AddSupplier.Params) {
    return await this.supplierRepository.createSupplier(supplier);
  }
}
