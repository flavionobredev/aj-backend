import { AddSupplier } from '@/domain/usecases/supplier/add-supplier';
import { badRequest, created, serverError } from '@/presentation/helpers';
import { Controller } from '@/presentation/protocols/controller';

export class HttpAddSupplierController implements Controller {
  constructor(private readonly suplierService: AddSupplier) {}

  async handle(request: HttpAddSupplierController.Request) {
    // TODO: adicionar validação
    throw badRequest(new Error('Not implemented'));
    const saved = await this.suplierService.createSupplier({
      name: request.name,
      description: request.description,
      userCode: request.userCode,
      products: request.products || [],
    });

    return created(saved);
  }
}

export namespace HttpAddSupplierController {
  export interface Request {
    name: string;
    description: string;
    userCode: string;
    products: string[];
  }
}
