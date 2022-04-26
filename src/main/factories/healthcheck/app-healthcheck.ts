import { MongoHealthCheck } from "@/infra/database/mongodb/healthcheck";
import { AppHealthCheck } from "@/infra/healthcheck";
import { HealthComposite } from "@/presentation/protocols/healthcheck/health-composite";

export const makeAppHealthCheck = (): HealthComposite => {
  return new AppHealthCheck([new MongoHealthCheck()])
}