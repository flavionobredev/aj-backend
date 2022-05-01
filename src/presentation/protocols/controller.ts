import { HttpResponse } from '@/presentation/protocols';

export interface Controller<T = any> {
  handle: (request: T) => Promise<Controller.Response>;
}

export namespace Controller {
  export type Response = HttpResponse;
}
