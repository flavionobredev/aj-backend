import { SupplierService } from '@/data/usecases/services/supplier';
import { DbSupplierRepository } from '@/infra/database/mongodb/repositories/supplier';

export const makeSupplierService = (): SupplierService => {
  return new SupplierService(new DbSupplierRepository());
};
