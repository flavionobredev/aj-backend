import { AddSupplier } from '@/domain/usecases/supplier/add-supplier';
import { badRequest, created, serverError } from '@/presentation/helpers';
import { Validation } from '@/presentation/protocols';
import { Controller } from '@/presentation/protocols/controller';

export class HttpAddSupplierController implements Controller {
  constructor(
    private readonly suplierService: AddSupplier,
    private readonly validations: Validation,
  ) {}

  async handle(request: HttpAddSupplierController.Request) {
    const error = await this.validations.validate(request);
    if(error){
      throw badRequest(error);
    }

    const saved = await this.suplierService.createSupplier({
      name: request.name,
      description: request.description,
      userCode: request.userCode,
      products: request.products || [],
      banner: request.img || '',
    }).catch(err => {
      throw serverError(err)
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
    img: string;
  }
}
