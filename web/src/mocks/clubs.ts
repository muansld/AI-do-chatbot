/** 목 데이터 — 서비스(src/services) 밖에서는 직접 가져오지 않아요. */
import type { ClubBooth, ClubNews } from "@/types/domain";

// 동아리 이름 · 내용은 예시예요
export const clubBooths: ClubBooth[] = [
  {
    id: "aido",
    name: "탐나는 AI:DO",
    category: "IT · 서비스",
    description: "센터의 불편함을 AI 길잡이로 푸는 서비스 개발 동아리예요.",
    schedule: "매주 수 18:00 · 3층 라운지",
    memberCount: 5,
    recruiting: false,
    isMakers: true,
  },
  {
    id: "jeju-local-startup",
    name: "제주 로컬 창업 스터디",
    category: "창업",
    description: "제주 로컬 자원으로 사업 아이템을 찾고 서로 피드백해요.",
    schedule: "매주 화 19:00 · 2층 회의실",
    memberCount: 9,
    recruiting: true,
  },
  {
    id: "portfolio",
    name: "포트폴리오 클럽",
    category: "취업",
    description: "이력서와 포트폴리오를 함께 다듬고 모의 면접을 해요.",
    schedule: "격주 목 18:30 · 온라인",
    memberCount: 14,
    recruiting: true,
  },
  {
    id: "running",
    name: "러닝 크루",
    category: "취미",
    description: "교육이 끝난 뒤 탑동 해안길을 같이 달려요.",
    schedule: "매주 목 19:30 · 탑동 광장",
    memberCount: 11,
    recruiting: true,
  },
];

export const clubNews: ClubNews[] = [
  {
    id: "open",
    kicker: "OPEN · 소식",
    title: "탐나는 AI:DO 정식 오픈",
    dateLabel: "11.10 (화) · 센터 전체",
    description: "출결, 병가, 바우처처럼 자주 묻는 규정을 가이드북 기준으로 바로 물어볼 수 있어요.",
    ctaLabel: "AI에게 물어보기",
    tone: "brand",
  },
  {
    id: "showcase",
    kicker: "EVENT · 행사",
    title: "동아리 활동 발표회 다시보기",
    dateLabel: "11.06 (금) · 발표 자료 PDF",
    description: "여섯 개 동아리가 한 학기 동안 해 온 활동을 발표 자료로 다시 볼 수 있어요.",
    ctaLabel: "발표 자료 보기",
    tone: "dark",
  },
  {
    id: "review",
    kicker: "REVIEW EVENT · 이벤트",
    title: "두에게 묻고 후기 남기기",
    dateLabel: "11.10 – 11.21 · 참여 32명",
    description: "탐나는 AI:DO를 써 보고 한 줄 후기를 남기면 3층 라운지에서 간식을 드려요.",
    ctaLabel: "후기 남기기",
    tone: "employment",
  },
  {
    id: "recruit",
    kicker: "RECRUIT · 모집",
    title: "14기 동아리원 모집 예정",
    dateLabel: "12월 공고 예정",
    description: "탐나는 AI:DO를 함께 키워 갈 14기 동아리원을 12월에 모집해요.",
    ctaLabel: "알림 받기",
    tone: "startup",
  },
];
