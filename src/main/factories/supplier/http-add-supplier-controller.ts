import { HttpAddSupplierController } from '@/presentation/controllers/supplier/http-add-supplier';
import { Controller } from '@/presentation/protocols/controller';
import { makeSupplierService } from './supplier-service';
import { makeAddSupplierValidation } from './supplier-validation';

export const makeHttpAddSupplierController = (): Controller => {
  return new HttpAddSupplierController(
    makeSupplierService(),
    makeAddSupplierValidation(),
  );
};
