export interface Validation {
  validate(input: any): Error | void | Promise<Error | void>;
}