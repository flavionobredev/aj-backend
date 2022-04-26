import { HealthCheck } from '@/presentation/protocols/healthcheck';
import { connection } from 'mongoose';

export class MongoHealthCheck implements HealthCheck {
  async check() {
    return [1, 2].includes(connection.readyState);
  }
}
