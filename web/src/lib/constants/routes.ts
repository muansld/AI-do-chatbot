/**
 * 경로는 문자열을 화면마다 직접 쓰지 말고 여기서 가져다 써요.
 * 피그마 화면 번호를 주석으로 남겨 두면 디자인과 맞춰 보기 쉬워요.
 */
export const ROUTES = {
  home: "/", // S1
  ask: "/ask", // S2
  schedule: "/schedule", // S3 (창업) · S3-1 (취업)
  center: {
    notices: "/center", // S4
    companies: "/center/companies", // S4-2
    faq: "/center/faq", // S4-1
    forms: "/center/forms",
    contact: "/center/contact",
  },
  clubs: {
    index: "/clubs", // S6
    makers: "/clubs/makers", // S6-1
    booth: (boothId: string) => `/clubs/booths/${boothId}`, // S6-3
  },
  /**
   * 매니저 · 1단계 (11/9 범위 정리): 로그인 · 질문 분석 · 일정만 만들어요.
   * 2단계(보류): 질문함 답변 등록 M1 · 공지·자료 M2 · 가이드북 확인 M2-1 · 새 기수 M2-2 · 기업 리스트 M2-3
   */
  manager: {
    login: "/manager/login", // M0
    insights: "/manager/insights", // M4 질문 분석 (보기 전용)
    schedule: "/manager/schedule", // M3
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** 이 경로로 시작하면 활성으로 봐요 */
  matchPrefix?: string;
}

export const STUDENT_NAV: NavItem[] = [
  { label: "홈", href: ROUTES.home },
  { label: "AI에게 묻기", href: ROUTES.ask, matchPrefix: ROUTES.ask },
  { label: "커리큘럼·일정", href: ROUTES.schedule, matchPrefix: ROUTES.schedule },
  { label: "센터 안내", href: ROUTES.center.notices, matchPrefix: "/center" },
  { label: "동아리", href: ROUTES.clubs.index, matchPrefix: "/clubs" },
];

export const CENTER_TABS: NavItem[] = [
  { label: "공지", href: ROUTES.center.notices },
  { label: "실습·인턴십 기업", href: ROUTES.center.companies },
  { label: "자주 묻는 질문", href: ROUTES.center.faq },
  { label: "서류·양식", href: ROUTES.center.forms },
  { label: "문의 방법", href: ROUTES.center.contact },
];

/** 매니저 · 1단계 메뉴 (피그마 Manager Sidebar v2 · 1단계) */
export const MANAGER_NAV: NavItem[] = [
  { label: "질문 분석", href: ROUTES.manager.insights, matchPrefix: ROUTES.manager.insights },
  { label: "일정", href: ROUTES.manager.schedule, matchPrefix: ROUTES.manager.schedule },
];

/** 현재 경로가 메뉴 항목에 해당하는지 */
export function isActivePath(pathname: string, item: NavItem): boolean {
  if (item.matchPrefix) return pathname.startsWith(item.matchPrefix);
  return pathname === item.href;
}
