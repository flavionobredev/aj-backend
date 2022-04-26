import { HealthCheck } from '@/presentation/protocols/healthcheck';
import { HealthComposite } from '@/presentation/protocols/healthcheck/health-composite';

export class AppHealthCheck implements HealthComposite {
  verifications: HealthCheck[] = [];

  constructor(private readonly healths: HealthCheck[]) {
    this.verifications = healths;
  }

  async check() {
    try {
      const results = await Promise.all(
        this.verifications.map(async (health) => await health.check()),
      );
      return !results.includes(false);
    } catch (error) {
      return false;
    }
  }
}
