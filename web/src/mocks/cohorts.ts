/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { Cohort } from "@/types/domain";

export const cohorts: Cohort[] = [
  { id: 13, stageLabel: "1단계 · 직무교육" },
  { id: 12, stageLabel: "2단계" },
  { id: 11, stageLabel: "2단계" },
];
