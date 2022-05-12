import { Validation } from '@/presentation/protocols';
import { MissingParamError } from '@/presentation/errors';

export class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}

  validate(input: any) {
    if ([null, undefined, ''].includes(input[this.fieldName])) {
      return new MissingParamError(this.fieldName);
    }
  }
}
