import { Exception } from '../protocols/exception';

export class HttpException extends Error implements Exception {
  public messages!: string | string[];
  public error!: string;
  public status!: number;

  constructor(init: Exception) {
    super(
      Array.isArray(init.messages) ? init.messages.join('\n') : init.messages,
    );
    Object.assign(this, init);
    this.name = HttpException.name;
  }
}
