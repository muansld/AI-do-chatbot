/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { ChatThread } from "@/types/domain";

// 피그마 S2 · S2-4 예시 대화
export const threads: ChatThread[] = [
  {
    id: "t-attendance",
    title: "지난주 화요일에 지문을 못 찍었어요",
    cohortId: 13,
    scope: "employment",
    updatedAt: "2026-11-26T10:12:00+09:00",
    messages: [
      {
        id: "m-1",
        role: "user",
        text: "지난주 화요일에 지문을 못 찍었어요. 출결 정정은 어떻게 하나요?",
      },
      {
        id: "m-2",
        role: "assistant",
        status: "answered",
        text: "지문 인식기나 GPS 오류로 출결이 잘못 찍혔다면 경위서와 증빙자료를 내서 바로잡을 수 있어요. 그대로 두면 출근 미인식은 지각, 퇴근 미인식은 무단결석 기준이 적용되니 꼭 제출해 주세요.",
        citations: [
          {
            guidebookId: "employment",
            page: 46,
            section: "4.1 출결 운영 기준",
            quote:
              "생체정보 인식 프로그램 및 GPS기반 프로그램의 오류로 인해 출결 관리 문제 발생 시 경위서와 증빙자료 제출을 통해 오류 수정",
          },
          { guidebookId: "employment", page: 50, section: "〈표 2-2〉 상벌점제 기준표" },
        ],
      },
    ],
  },
  {
    id: "t-parking",
    title: "센터 주차장에 차를 대도 되나요?",
    cohortId: 13,
    scope: "employment",
    updatedAt: "2026-11-26T09:40:00+09:00",
    messages: [
      { id: "m-3", role: "user", text: "센터 주차장에 차를 대도 되나요?" },
      {
        id: "m-4",
        role: "assistant",
        status: "no-evidence",
        text: "주차에 대한 내용은 가이드북에서 찾지 못했어요.",
        citations: [],
      },
    ],
  },
];
