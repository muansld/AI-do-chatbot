/**
 * 경로는 문자열을 화면마다 직접 쓰지 말고 여기서 가져다 써요.
 * 오른쪽 주석은 피그마 프레임 번호예요 (Component 페이지 00 READ ME 참고).
 */
export const ROUTES = {
  home: "/", // S1
  ask: "/ask", // S2 새 질문
  askThread: (threadId: string) => `/ask/${threadId}`, // S2 · S2-1 ~ S2-10
  schedule: "/schedule", // S3 · S3-1 ~ S3-6
  manager: {
    login: "/manager/login", // M0
    insights: "/manager/insights", // M4
    insightDetail: (questionId: string) => `/manager/insights/${questionId}`, // M4-1
    schedule: "/manager/schedule", // M3
    scheduleImport: "/manager/schedule/import", // M5-1 기수 정보 + 가이드북 올리기
    scheduleImportReview: "/manager/schedule/import/review", // M5-2 분석 결과 확인
    scheduleImportPublish: "/manager/schedule/import/publish", // M5-3 게시 전 확인
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** 이 경로로 시작하면 활성으로 봐요 */
  matchPrefix?: string;
}

/** 교육생 헤더 메뉴 (피그마 Header/GNB v3) — '센터 일정' 하나예요. 로고가 홈이에요. */
export const STUDENT_NAV: NavItem[] = [
  { label: "센터 일정", href: ROUTES.schedule, matchPrefix: ROUTES.schedule },
];

/** 매니저 1단계 메뉴 */
export const MANAGER_NAV: NavItem[] = [
  { label: "질문 분석", href: ROUTES.manager.insights, matchPrefix: ROUTES.manager.insights },
  { label: "일정", href: ROUTES.manager.schedule, matchPrefix: ROUTES.manager.schedule },
];

/** 현재 경로가 메뉴 항목에 해당하는지 */
export function isActivePath(pathname: string, item: NavItem): boolean {
  if (item.matchPrefix) return pathname.startsWith(item.matchPrefix);
  return pathname === item.href;
}
