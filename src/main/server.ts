import { App } from './config/App';

async function bootstrap() {
  const app = await new App().initialiaze();
  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`[App] app listen on port ${PORT}`));
}

bootstrap();
