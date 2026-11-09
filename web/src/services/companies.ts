import { companies } from "@/mocks/companies";
import type { Company, CompanyProgramType } from "@/types/domain";

export async function getCompanies(filter?: {
  programType?: CompanyProgramType;
}): Promise<Company[]> {
  return companies.filter((c) => !filter?.programType || c.programType === filter.programType);
}
