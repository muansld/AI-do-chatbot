import { cohorts } from "@/mocks/cohorts";
import type { Cohort } from "@/types/domain";

export async function getCohorts(): Promise<Cohort[]> {
  return cohorts;
}
