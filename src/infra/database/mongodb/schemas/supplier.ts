import { Supplier } from '@/domain/entity/supplier';
import { Document } from 'mongoose';
import { MongoUtil } from '../mongo-connect';

export type SupplierDocument = Supplier & Document;

const schema = MongoUtil.createSchema<SupplierDocument>({
  userCode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    max: 1024,
  },
  products: {
    type: [String],
    default: [],
  },
});

export const SupplierModel = MongoUtil.createModel<SupplierDocument>(
  'suppliers',
  schema,
);
