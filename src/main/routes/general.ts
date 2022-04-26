import { Router } from 'express';
export default (router: Router) => {
  router.get('/', (_, res) => res.status(200).json({ message: 'ok' }));
  router.get('/health', (_, res) => res.status(200).json({ message: 'ok' }));
};
