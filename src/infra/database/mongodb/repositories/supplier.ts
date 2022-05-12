import { FindAllSupplierRepository } from '@/data/db/protocols/supplier/find-all-supplier-repository';
import { Supplier } from '@/domain/entity/supplier';
import { MongoPagination } from '../pagination/mongo-pagination';
import { SupplierRepository } from '../protocols/supplier-repository';
import { SupplierModel } from '../schemas/supplier';

export class DbSupplierRepository implements SupplierRepository {
  private readonly model = SupplierModel;
  private readonly mongoPaginate = new MongoPagination(this.model);
  constructor() {}

  findAllSupplier(
    params: FindAllSupplierRepository.Params,
  ): Promise<FindAllSupplierRepository.Result> {
    return this.mongoPaginate.paginate({
      query: {},
      projection: params.projection || {},
      sort: { name: 1 },
      page: params.page,
      limit: params.limit,
    });
  }

  async createSupplier(supplier: Supplier) {
    return await this.model.create(supplier);
  }
}
