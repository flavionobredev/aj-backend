import { HealthCheck } from './health';

export interface HealthComposite {
  verifications: HealthCheck[];
  check(): Promise<boolean>;
}
