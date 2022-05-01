import { HttpException } from '@/errors/exceptions/http-exception';
import { Logger } from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';

export const makeExceptionHandler = () => (
  err: unknown,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (response.headersSent) {
    return next(err);
  }

  if (err instanceof HttpException) {
    Logger.error(err.messages);
    const { status, messages, error } = err;
    return response.status(status).json({
      timestamp: new Date(),
      path: request.url,
      messages,
      error,
    });
  }
};
