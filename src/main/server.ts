import { App } from './config/App';

function bootstrap() {
  const app = new App().initialiaze();
  const PORT = process.env.PORT;
  app.listen(PORT, () => console.log(`[App] app listen on port ${PORT}`));
}

bootstrap();
