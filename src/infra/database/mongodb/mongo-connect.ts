import { Logger } from '@/utils/logger';
import {
  connection,
  connect,
  Schema,
  SchemaDefinition,
  SchemaDefinitionType,
  model,
} from 'mongoose';

export class MongoUtil {
  static async connect(url: string) {
    connection.on('connecting', () =>
      Logger.info('[MongoUtil] connecting to MongoDB...'),
    );
    connection.on('connected', () =>
      Logger.info('[MongoUtil] connected with MongoDB!'),
    );
    connection.on('disconnected', () =>
      Logger.warn('[MongoUtil] disconnected to MongoDB'),
    );
    connection.on('close', () =>
      Logger.warn('[MongoUtil] close MongoDB connection'),
    );
    connection.on('error', (err) =>
      Logger.fatal('[MongoUtil] MongoDB error', err),
    );
    return connect(url as string, {
      socketTimeoutMS: 1 * 1000,
      family: 4,
      serverSelectionTimeoutMS: 15 * 1000,
    });
  }

  static createSchema<T>(
    definition: SchemaDefinition<SchemaDefinitionType<T>>,
  ): Schema<T> {
    return new Schema(definition);
  }

  static createModel<T>(collectionName: string, schema: Schema<T>) {
    return model(collectionName, schema);
  }
}
