# 탐나는 AI:DO — web

제주더큰내일센터 탐나는인재를 위한 AI 길잡이 홈페이지의 프런트엔드예요.
디자인 원본은 피그마 `탐나는AI-DO` 파일의 **example2** 페이지예요.

> 백엔드 · AI 서버 연동은 아직 하지 않아요. 데이터는 `src/mocks`의 목 데이터를 `src/services`를 거쳐서만 써요.

## 기술 스택

| 영역       | 선택                                                                             |
| ---------- | -------------------------------------------------------------------------------- |
| 프레임워크 | Next.js 16 (App Router, Cache Components) · React 19                             |
| 언어       | TypeScript (strict, `noUncheckedIndexedAccess`)                                  |
| 스타일     | Tailwind CSS v4 + 피그마 토큰(`src/styles/tokens.css`)                           |
| 품질       | ESLint (`eslint-config-next`) · Prettier (+ Tailwind 클래스 정렬) · EditorConfig |
| 글꼴       | Noto Sans KR (`next/font/google`)                                                |

## 시작하기

```bash
cp .env.example .env.local   # 처음 한 번
npm install
npm run dev                  # http://localhost:3000
```

Node.js 20.9 이상이 필요해요.

## 스크립트

| 명령                              | 하는 일                                      |
| --------------------------------- | -------------------------------------------- |
| `npm run dev`                     | 개발 서버                                    |
| `npm run build`                   | 배포용 빌드                                  |
| `npm run lint` / `lint:fix`       | 코드 규칙 검사 / 자동 고침                   |
| `npm run format` / `format:check` | 코드 모양 맞추기 / 검사                      |
| `npm run typecheck`               | 라우트 타입 생성 후 타입 검사                |
| `npm run check`                   | lint + typecheck + format:check (PR 전에 꼭) |

## 폴더 구조

```
web/
├─ docs/CONVENTIONS.md        코드 규칙 (꼭 읽어 주세요)
├─ public/                    정적 파일 (이미지 · 아이콘)
└─ src/
   ├─ app/                    라우트만 둬요 (page · layout · error · not-found)
   │  ├─ (student)/           교육생 화면 — 상단 바 · 푸터 · 모바일 탭 공통 레이아웃
   │  │  ├─ page.tsx          /                     S1 홈
   │  │  ├─ ask/              /ask                  S2 AI에게 묻기
   │  │  ├─ schedule/         /schedule             S3 · S3-1 커리큘럼·일정
   │  │  ├─ center/           /center/*             S4 센터 안내 (공지 · 기업 · FAQ · 서류 · 문의)
   │  │  └─ clubs/            /clubs/*              S6 동아리 · 만든 사람들 · 부스 상세
   │  ├─ manager/
   │  │  ├─ login/            /manager/login        M0 로그인 (사이드바 없음)
   │  │  └─ (console)/        /manager/*            M1~M3 (사이드바 레이아웃)
   │  ├─ layout.tsx           루트 레이아웃 (글꼴 · 메타데이터)
   │  ├─ error.tsx            E2 오류
   │  └─ not-found.tsx        E1 404
   ├─ components/
   │  ├─ ui/                  도메인을 모르는 공용 부품 (Button · Tag · EmptyState)
   │  └─ layout/              화면 틀 (SiteHeader · SiteFooter · MobileTabBar · ManagerSidebar)
   ├─ features/               도메인별 기능 (컴포넌트 · 훅 · 상태)
   │  ├─ preferences/         기수 · 트랙 선택 (브라우저 저장)
   │  ├─ schedule/ center/ clubs/ …
   ├─ services/               데이터 접근 계층 — 지금은 목 데이터, 나중에 API로 교체
   ├─ mocks/                  목 데이터 (services 에서만 가져와요)
   ├─ types/                  도메인 타입
   ├─ lib/                    유틸 · 상수 (cn, routes, site, track)
   └─ styles/tokens.css       피그마 디자인 토큰
```

### 화면 ↔ 경로

| 피그마                                                  | 경로                                                                                                                                    |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| S1 홈 · Mo-1                                            | `/`                                                                                                                                     |
| S2 AI에게 묻기 · Mo-2                                   | `/ask`                                                                                                                                  |
| S3 · S3-1 커리큘럼·일정 · Mo-3                          | `/schedule`                                                                                                                             |
| S4 공지 · S4-2 기업 · S4-1 FAQ · Mo-4                   | `/center` · `/center/companies` · `/center/faq` · `/center/forms` · `/center/contact`                                                   |
| S6 동아리 · S6-1 만든 사람들 · S6-3 부스 상세           | `/clubs` · `/clubs/makers` · `/clubs/booths/[boothId]`                                                                                  |
| M0 로그인                                               | `/manager/login`                                                                                                                        |
| M1 질문함 · M2 공지·자료 · M2-1 · M2-2 · M2-3 · M3 일정 | `/manager/inbox` · `/manager/notices` · `/manager/notices/review` · `/manager/cohorts/new` · `/manager/companies` · `/manager/schedule` |

## 백엔드 · AI 서버를 붙일 때

1. `.env.local`에 `NEXT_PUBLIC_API_BASE_URL` · `AI_SERVER_URL`을 채워요.
2. `src/services/*.ts` 안쪽만 `fetch`로 바꿔요. 함수 이름과 반환 타입은 그대로 둬요.
3. API 응답이 `src/types/domain.ts`와 다르면 services 안에서 바꿔서 돌려줘요.
4. 다 옮긴 도메인은 `src/mocks`에서 지워요.
