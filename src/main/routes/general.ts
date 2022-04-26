import { Router } from 'express';
import { makeAppHealthCheck } from '../factories/healthcheck/app-healthcheck';
const healthCheck = makeAppHealthCheck();
export default (router: Router) => {
  router.get('/', (_, res) => res.status(200).json({ message: 'ok' }));
  router.get('/_health', async (_, res) => {
    const response = await healthCheck.check();
    return response
      ? res.status(200).json({ message: 'healthy' })
      : res.status(500).json({ message: 'unhealthy' });
  });
};
