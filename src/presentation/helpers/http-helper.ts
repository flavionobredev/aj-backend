import { HttpResponse } from '@/presentation/protocols';
import { ServerError, UnauthorizedError } from '../errors';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
  errMessage: error.message,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  errMessage: error.message,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  errMessage: 'Unauthorized',
  body: new UnauthorizedError(),
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  errMessage: error.message,
  body: new ServerError(error.message, error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});
