import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeHttpAddSupplierController } from '../factories/supplier/http-add-supplier-controller';
import { makeHttpFindAllSupplierController } from '../factories/supplier/http-find-all-supplier-controller';

const addSupplierController = adaptRoute(makeHttpAddSupplierController());
const findAllSupplierController = adaptRoute(
  makeHttpFindAllSupplierController(),
);

export default (router: Router) => {
  router.post('/suppliers', addSupplierController);
  router.get('/suppliers', findAllSupplierController);
};
