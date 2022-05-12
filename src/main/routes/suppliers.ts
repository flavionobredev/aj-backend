import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeHttpAddSupplierController } from '../factories/supplier/http-add-supplier-controller';

const addSupplierController = adaptRoute(makeHttpAddSupplierController());

export default (router: Router) => {
  router.post('/suppliers', addSupplierController);
};
