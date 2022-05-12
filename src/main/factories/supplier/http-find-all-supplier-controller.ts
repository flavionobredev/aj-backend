import { HttpFindAllSupplierController } from '@/presentation/controllers/supplier/http-find-all';
import { Controller } from '@/presentation/protocols/controller';
import { makeSupplierService } from './supplier-service';

export const makeHttpFindAllSupplierController = (): Controller => {
  return new HttpFindAllSupplierController(makeSupplierService());
};
