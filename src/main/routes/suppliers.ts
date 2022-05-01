import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeHttpAddSupplierController } from '../factories/supplier/http-add-supplier-controller';

export default (router: Router) => {
  router.post('/suppliers', adaptRoute(makeHttpAddSupplierController()));
};
