/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { Notice } from "@/types/domain";

// 13기 취업트랙 가이드북(2026.10.01) 병행 일정 실제 내용
export const notices: Notice[] = [
  {
    id: "n-docs-deadline",
    title: "이력서 · 자기소개서 · 포트폴리오 제출 11/9 (월) 09:00까지",
    summary: "실습·인턴십 기업 매칭에 쓰여요 · LMS에 올려 주세요",
    track: "employment",
    cohortIds: [13],
    publishedAt: "2026-11-02",
    isNew: true,
  },
  {
    id: "n-interview",
    title: "실습 · 인턴십 기업 면접 11/17 (화) ~ 11/24 (화)",
    summary: "면접 기간에도 프로젝트 수행은 함께 진행해요",
    track: "employment",
    cohortIds: [13],
    publishedAt: "2026-11-06",
    isNew: true,
  },
  {
    id: "n-showcase",
    title: "직무교육 성과공유회 11/26 (목) 오후",
    summary: "업(業)프로젝트 Ⅰ·Ⅱ 최종 성과를 발표해요",
    track: "employment",
    cohortIds: [13],
    publishedAt: "2026-11-06",
  },
  {
    id: "n-labor",
    title: "11/27 (금) 심리상담 · 노무교육",
    summary: "인턴십·실습 전에 근로계약과 노동법 기초를 배워요",
    track: "employment",
    cohortIds: [13],
    publishedAt: "2026-11-06",
  },
  {
    id: "n-completion",
    title: "직무교육 이수 행사 11/30 (월) 오후",
    summary: "12/1부터 실습 · 인턴십이 시작돼요",
    track: "employment",
    cohortIds: [13],
    publishedAt: "2026-11-06",
  },
];
