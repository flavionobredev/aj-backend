import { FindAllSupplier } from '@/domain/usecases/supplier/find-all-supplier';
import { ok, serverError } from '@/presentation/helpers';
import { Controller } from '@/presentation/protocols/controller';

export class HttpFindAllSupplierController implements Controller {
  constructor(
    private readonly suplierService: FindAllSupplier,
  ) {}

  async handle(request: HttpFindAllSupplierController.Request) {
    const results = await this.suplierService
      .findAllSupplier({
        limit: Number(request.limit) || 10,
        page: Number(request.page) || 1,
        projection: { name: 1, description: 1, banner: 1, _id: 1 },
      })
      .catch((err) => {
        throw serverError(err);
      });

    return ok(results);
  }
}

export namespace HttpFindAllSupplierController {
  export interface Request {
    page: number;
    limit: number;
  }
}
