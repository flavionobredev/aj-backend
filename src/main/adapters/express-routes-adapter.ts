import { HttpException } from '@/errors/exceptions/http-exception';
import { Controller } from '@/presentation/protocols/controller';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const request = {
        ...(req.body || {}),
        ...(req.params || {}),
        ...(req.query || {}),
      };
      const httpResponse = await controller.handle(request);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        res.status(httpResponse.statusCode).json({
          error: httpResponse.body.message,
        });
      }
    } catch (err) {
      res.status((err as Controller.Response).statusCode).json({
        message: (err as Controller.Response).errMessage,
        statusCode: (err as Controller.Response).statusCode,
        path: req.originalUrl,
        timestamp: new Date(),
      });
    }
  };
};
