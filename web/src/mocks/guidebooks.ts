/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { Guidebook } from "@/types/domain";

// 13기 자료 (PDF 파일은 아직 public/ 에 없어요)
export const guidebooks: Guidebook[] = [
  { id: "operating-guideline", cohortId: 13, title: "운영 지침", pageCount: 24 },
  { id: "employment", cohortId: 13, title: "13기 취업트랙 직무교육과정 가이드북", pageCount: 60 },
  { id: "startup", cohortId: 13, title: "13기 창업트랙 가이드북", pageCount: 52 },
  { id: "common", cohortId: 13, title: "13기 공통교육과정 가이드북", pageCount: 28 },
];
