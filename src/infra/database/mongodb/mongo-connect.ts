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
      console.log('[MongoUtil] connecting to MongoDB...'),
    );
    connection.on('connected', () =>
      console.log('[MongoUtil] connected with MongoDB!'),
    );
    connection.on('disconnected', () =>
      console.log('[MongoUtil] disconnected to MongoDB'),
    );
    connection.on('close', () =>
      console.log('[MongoUtil] close MongoDB connection'),
    );
    connection.on('error', (err) =>
      console.log('[MongoUtil] MongoDB error', err),
    );
    return connect(url as string, {
      autoIndex: false,
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
