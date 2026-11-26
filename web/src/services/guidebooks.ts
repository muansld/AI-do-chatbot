import { guidebooks } from "@/mocks/guidebooks";
import type { CohortId, Guidebook, GuidebookId } from "@/types/domain";

/** 사이드바 '가이드북 다운로드' · 원문 PDF 좌우 보기에 써요 */
export async function getGuidebooks(cohortId: CohortId): Promise<Guidebook[]> {
  return guidebooks.filter((g) => g.cohortId === cohortId);
}

export async function getGuidebook(
  cohortId: CohortId,
  id: GuidebookId,
): Promise<Guidebook | undefined> {
  return guidebooks.find((g) => g.cohortId === cohortId && g.id === id);
}
