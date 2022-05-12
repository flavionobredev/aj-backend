import { AddSupplier } from '@/domain/usecases/supplier/add-supplier';
import { FindAllSupplier } from '@/domain/usecases/supplier/find-all-supplier';
import { SupplierRepository } from '@/infra/database/mongodb/protocols/supplier-repository';

interface Service extends AddSupplier, FindAllSupplier {}

export class SupplierService implements Service {
  constructor(private readonly supplierRepository: SupplierRepository) {}

  async createSupplier(supplier: AddSupplier.Params) {
    return await this.supplierRepository.createSupplier(supplier);
  }

  async findAllSupplier(params: FindAllSupplier.Params) {
    return await this.supplierRepository.findAllSupplier({
      limit: params.limit,
      page: params.page,
      projection: params.projection,
    })
  }
}
