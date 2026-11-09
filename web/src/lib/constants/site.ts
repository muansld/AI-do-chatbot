import type { Track } from "@/types/domain";

export const SITE = {
  name: "탐나는 AI:DO",
  tagline: "탐나는 인재 길잡이",
  description:
    "출결, 병가, 바우처, 상벌점까지 센터 가이드북을 기준으로 바로 알려 드려요. 제주더큰내일센터 탐나는인재를 위한 AI 길잡이예요.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const TRACK_LABEL: Record<Track, string> = {
  employment: "취업",
  integrated: "통합",
  startup: "창업",
};

/** 토글에 보이는 순서 (피그마 GNB와 같아요) */
export const TRACK_ORDER: Track[] = ["employment", "integrated", "startup"];
