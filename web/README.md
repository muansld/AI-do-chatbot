# 탐나는 AI:DO — web

제주더큰내일센터 탐나는인재를 위한 AI 길잡이 홈페이지의 프런트엔드예요.
디자인 원본은 피그마 `탐나는AI-DO` 파일의 **탐나는 AI:DO**(교육생) · **매니저** 페이지예요. 파일 안내는 Component 페이지의 `00 READ ME`에 있어요.

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

라우트는 `app/`, 기능 코드는 `features/`, 데이터는 `services/`에 두는 구조예요. 자세한 규칙은 [`docs/CONVENTIONS.md`](docs/CONVENTIONS.md)를 봐요.

```
web/
├─ docs/CONVENTIONS.md            코드 규칙 (꼭 읽어 주세요)
├─ public/                        정적 파일 (이미지 · 아이콘)
└─ src/
   ├─ app/                        라우트 파일만 (page · layout · loading · error · not-found)
   │  ├─ (student)/
   │  │  ├─ page.tsx              /                         S1 홈 (헤더 · 푸터 없음)
   │  │  └─ (shell)/              헤더 + 푸터 레이아웃 (URL에는 안 나와요)
   │  │     ├─ ask/               /ask                      S2 새 질문
   │  │     │  ├─ [threadId]/     /ask/t-attendance         S2 · S2-1 ~ S2-10 대화
   │  │     │  └─ loading.tsx                               S2-2 답변 작성 중
   │  │     └─ schedule/          /schedule                 S3 · S3-1 ~ S3-6 센터 일정
   │  ├─ manager/
   │  │  ├─ login/                /manager/login            M0 로그인 (사이드바 없음)
   │  │  └─ (console)/            매니저 사이드바 레이아웃
   │  │     ├─ insights/          /manager/insights         M4 질문 분석
   │  │     │  └─ [questionId]/   /manager/insights/q-…     M4-1 질문 상세 · 처리
   │  │     └─ schedule/          /manager/schedule         M3 일정
   │  │        └─ import/         /manager/schedule/import  M5-1 새 기수 등록 → review(M5-2) → publish(M5-3)
   │  ├─ layout.tsx               루트 레이아웃 (글꼴 · 메타데이터)
   │  ├─ error.tsx                E2 연결 오류
   │  └─ not-found.tsx            E1 404
   ├─ components/
   │  ├─ ui/                      도메인을 모르는 공용 부품 (Button · Tag · EmptyState · ScreenPlaceholder)
   │  └─ layout/                  화면 틀 (SiteHeader · MainNav · NavLinks · SiteFooter · ManagerSidebar · PageHeader)
   ├─ features/                   도메인별 기능 (components · hooks · store · utils)
   │  ├─ preferences/             기수 · 범위(취업 · 창업 · 공통) 선택 — 브라우저 저장
   │  ├─ schedule/                센터 일정
   │  └─ insights/                매니저 질문 분석
   │     (ask · schedule-import 는 화면을 옮기면서 만들어요)
   ├─ services/                   데이터 접근 계층 — 지금은 목 데이터, 나중에 API로 교체
   │                              threads · guidebooks · schedule · cohorts · insights
   ├─ mocks/                      목 데이터 (services 에서만 가져와요)
   ├─ types/domain.ts             도메인 타입 (Track · Scope · ChatThread · AnswerStatus …)
   ├─ lib/                        순수 함수 · 상수 (cn · scope · constants/routes · constants/site)
   └─ styles/tokens.css           피그마 foundation 변수 → 디자인 토큰
```

### 화면 ↔ 경로

| 피그마                                             | 경로                                                              |
| -------------------------------------------------- | ----------------------------------------------------------------- |
| S1 홈                                              | `/`                                                               |
| S2 AI에게 묻기 (새 질문)                           | `/ask`                                                            |
| S2 · S2-1 ~ S2-10 대화 · 원문 PDF · 근거 못 찾음 … | `/ask/[threadId]` (원문 PDF는 `?source=employment&page=46`)       |
| S2-2 답변 작성 중                                  | `/ask` 구간의 `loading.tsx`                                       |
| S3 · S3-1 ~ S3-6 센터 일정                         | `/schedule` (`?view=employment&cohort=13&month=2026-11`)          |
| M0 로그인                                          | `/manager/login`                                                  |
| M4 질문 분석 · M4-1 질문 상세                      | `/manager/insights` · `/manager/insights/[questionId]`            |
| M3 일정 · M5-1 ~ M5-3 새 기수 등록                 | `/manager/schedule` · `/manager/schedule/import/{review,publish}` |

> 없앤 화면: 동아리 · 실습·인턴십 기업 리스트 · 자주 묻는 질문 · 센터 안내 · 모바일 전용 화면.
> 매니저 2단계(질문함 답변 등록 · 공지·자료)는 보류예요.

## 백엔드 · AI 서버를 붙일 때

1. `.env.local`에 `NEXT_PUBLIC_API_BASE_URL` · `AI_SERVER_URL`을 채워요.
2. `src/services/*.ts` 안쪽만 `fetch`로 바꿔요. 함수 이름과 반환 타입은 그대로 둬요.
3. API 응답이 `src/types/domain.ts`와 다르면 services 안에서 바꿔서 돌려줘요.
4. 다 옮긴 도메인은 `src/mocks`에서 지워요.
