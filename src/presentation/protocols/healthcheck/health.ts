export interface HealthCheck {
  check(params?: unknown): Promise<HealthCheck.Response>;
}

export namespace HealthCheck {
  export type Response = boolean
}