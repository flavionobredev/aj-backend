import { MongoUtil } from '@/infra/database/mongodb/mongo-connect';
import express, { Express } from 'express';
import helmet from 'helmet';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.setMiddlewares();
  }

  setMiddlewares() {
    this.app.use(helmet());
  }

  async initRoutes() {
    const generalRouter = express.Router();
    this.app.use('/', generalRouter);
    (await import('../routes/general')).default(generalRouter);

    const appRouter = express.Router();
    this.app.use('/api', appRouter);
    readdirSync(join(__dirname, '../routes')).map(async (file) => {
      if (!file.endsWith('.map')) {
        (await import(`../routes/${file}`)).default(appRouter);
      }
    });
  }

  async initialiaze() {
    await this.initRoutes();
    await MongoUtil.connect(process.env.MONGO_DB_URI as string);
    return this.app;
  }
}
