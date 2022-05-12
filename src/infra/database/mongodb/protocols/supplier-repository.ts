import { AddSupplierRepository } from '@/data/db/protocols/supplier/add-suplier-repository';
import { FindAllSupplierRepository } from '@/data/db/protocols/supplier/find-all-supplier-repository';

export interface SupplierRepository
  extends AddSupplierRepository,
    FindAllSupplierRepository {}
