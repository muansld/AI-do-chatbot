# 코드 규칙 (Conventions)

팀이 같은 방식으로 쓰기 위한 약속이에요. 도구로 강제되는 규칙(🔒)과 리뷰에서 보는 규칙으로 나눠요.

## 1. 폴더와 책임

Next.js App Router에서 많이 쓰는 **"라우트는 `app/`, 기능 코드는 `features/`, 데이터는 `services/`"** 구조예요.

| 폴더                | 무엇을 둬요                                                                  | 두지 않아요                                                     |
| ------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `app/`              | `page` · `layout` · `loading` · `error` · `not-found` 같은 **라우트 파일만** | 재사용 컴포넌트, 데이터 가공 로직                               |
| `components/ui`     | 도메인을 모르는 공용 부품 (Button, Tag, EmptyState …)                        | 특정 화면에서만 쓰는 부품                                       |
| `components/layout` | 화면 틀 (헤더 · 푸터 · 매니저 사이드바 · 메뉴 링크)                          | 데이터 조회 (단, 서버 컴포넌트에서 services 호출은 OK)          |
| `features/<도메인>` | 그 도메인의 컴포넌트 · 훅 · 상태                                             | 다른 도메인 코드 직접 가져오기 (필요하면 `components`로 올려요) |
| `services/`         | 데이터 조회 · 변경 함수 (지금은 목 데이터)                                   | UI                                                              |
| `mocks/`            | 목 데이터                                                                    | — (`services` 밖에서 가져오지 않아요)                           |
| `types/`            | 도메인 타입 (`domain.ts`)                                                    | 컴포넌트 props 타입 (컴포넌트 파일에 둬요)                      |
| `lib/`              | 순수 함수 · 상수 (`cn`, `scope`, `constants/routes`, `constants/site`)       | React 코드                                                      |
| `styles/`           | 피그마 변수를 옮긴 디자인 토큰 (`tokens.css`)                                | 화면별 CSS                                                      |

- `features/<도메인>` 안 구조: `components/` · `hooks/` · `store.ts` · `utils.ts` (필요한 것만).
- 지금 도메인: `ask`(AI에게 묻기) · `schedule`(센터 일정) · `preferences`(기수 · 범위 선택) · `insights`(매니저 질문 분석) · `schedule-import`(매니저 새 기수 등록).
- 한 화면에서만 쓰는 부품이 커지면 `features/<도메인>/components`로 옮겨요.

## 2. 라우트

- **라우트 그룹**으로 URL은 그대로 두고 레이아웃만 나눠요.
  - `(student)/page.tsx` — 홈(S1). 헤더 · 푸터가 없어요.
  - `(student)/(shell)/` — 헤더 + 푸터가 있는 교육생 화면 (`/ask`, `/schedule`).
  - `manager/(console)/` — 매니저 사이드바가 있는 화면. 로그인(`manager/login`)은 그룹 밖이에요.
- 경로 문자열은 직접 쓰지 않고 `ROUTES`(`lib/constants/routes.ts`)에서 가져와요. 동적 경로는 함수예요. 예) `ROUTES.askThread(id)`
- 동적 경로(`[threadId]`)는 `generateStaticParams`로 예시 페이지를 미리 만들어요.
- 구간마다 필요하면 `loading.tsx`(로딩 화면) · `error.tsx`(오류 화면)를 둬요. 예) `ask/loading.tsx` = S2-2 답변 작성 중.

## 3. 이름 짓기

| 대상                     | 규칙                        | 예                              |
| ------------------------ | --------------------------- | ------------------------------- |
| 컴포넌트 파일 · 컴포넌트 | PascalCase                  | `SiteHeader.tsx` / `SiteHeader` |
| 훅                       | `use` + camelCase           | `usePreferences`                |
| 그 밖의 파일             | camelCase                   | `routes.ts`, `scope.ts`         |
| 라우트 폴더              | kebab-case (영문)           | `schedule/import`, `[threadId]` |
| 상수                     | UPPER_SNAKE_CASE            | `ROUTES`, `SCOPE_LABEL`         |
| 타입 · 인터페이스        | PascalCase, `I` 접두어 없음 | `ChatThread`, `ButtonProps`     |
| 이벤트 props             | `on` + 동사                 | `onSelect`                      |
| 불리언                   | `is` · `has` · `can`        | `isActive`, `hasError`          |

- 페이지 컴포넌트 이름은 `~Page`, 레이아웃은 `~Layout`으로 끝나요.
- 코드 식별자는 영어, 화면 문구 · 주석은 한국어로 써요.
- 컴포넌트 이름은 피그마 컴포넌트 이름과 맞춰요. 예) 피그마 `Composer v3` → `Composer`, `Chat/Source Box` → `SourceBox`

## 4. 컴포넌트

- **기본은 서버 컴포넌트**예요. 상태 · 이벤트 · 브라우저 API가 필요한 곳만 `"use client"`를 붙이고, 가능한 한 작은 단위(잎사귀)로 내려요.
- `export default`는 Next 라우트 파일(`page`, `layout` …)에만 써요. 나머지는 **이름 있는 export**예요.
- props 타입은 `interface ~Props`로 컴포넌트 바로 위에 둬요.
- 화면 파일에는 피그마 프레임 번호를 주석으로 남겨요. 예) `/** 피그마 S2-4 근거 못 찾음 */`
- 아직 못 옮긴 부분은 `ScreenPlaceholder`로 표시하고, 구현하면 지워요.

## 5. 데이터와 상태

- 화면은 데이터를 **`@/services/*` 함수로만** 가져와요. `@/mocks`를 직접 가져오지 않아요.
- services 함수는 모두 `async`이고 `src/types/domain.ts` 타입을 돌려줘요. API를 붙일 때는 services 안쪽만 바꿔요.
- **트랙과 범위를 구분해요.**
  - `Track` = 교육생이 실제로 속한 과정: `employment`(취업) · `startup`(창업) 두 가지뿐이에요.
  - `Scope` = 질문 · 일정 · 답변이 누구에게 해당하는지: `Track` 또는 `common`(공통: 공통교육과정 · 운영 지침 · 센터 행사).
  - 질문창의 '취업 · 창업 · 공통' 칩은 `Scope`예요. 거를 때는 `matchesScope()`를 써요.
- **답변 상태**는 `AnswerStatus`(`streaming` · `answered` · `no-evidence` · `no-data`) 하나로 화면을 갈라요.
- **상태를 어디에 둘지**
  | 종류                                   | 위치                                    | 예                                                  |
  | -------------------------------------- | --------------------------------------- | --------------------------------------------------- |
  | 공유하거나 새로고침해도 남아야 하는 값 | URL (`searchParams`)                    | 일정 보기 · 기수 · 달, 원문 PDF `?source=…&page=46` |
  | 교육생이 고르는 기수 · 범위            | `usePreferences()` (브라우저에만 저장)  | 13기 · 공통                                         |
  | 한 화면 안의 잠깐 상태                 | 컴포넌트 `useState` (+ 필요하면 저장소) | 사이드바 접힘, 펼친 근거 카드                       |
- 🔒 Cache Components가 켜져 있어요. `usePathname()` · `searchParams` · `cookies()`처럼 요청 때만 아는 값을 읽는 컴포넌트는 `<Suspense>`로 감싸요. (`NavLinks` 참고 — 미리 만든 화면에는 활성 표시 없이 먼저 보여요)

## 6. 스타일

- 🔒 Prettier가 Tailwind 클래스 순서를 자동으로 맞춰요.
- **색 · 모서리 · 그림자 · 글자는 토큰만** 써요. hex 값이나 `text-[13px]` 같은 임의 값은 쓰지 않아요.
  - 색: `text-fg` · `text-fg-secondary` · `bg-subtle` · `border-line` · `bg-brand` · `bg-brand-faint` …
  - 글자: 피그마 텍스트 스타일 이름 그대로 `typo-title-26`, `typo-body-14-medium` …
  - 모서리: `rounded-sm`(6) · `rounded-lg`(12) · `rounded-xl`(16) · `rounded-2xl`(20)
  - 그림자: `shadow-xs` · `shadow-sm` · `shadow-md` · `shadow-lg`
- 토큰이 없으면 **피그마 foundation에 먼저 추가**하고 `tokens.css`에 옮겨요.
- 조건부 클래스는 `cn()`으로 합쳐요.
- 데스크톱(1440) 기준으로 디자인해요. 좁은 화면은 깨지지 않게만 맞춰요 (`md:` = 768 이상).

## 7. 화면 문구

- 캐릭터 호칭은 항상 **'두(DO)'**예요. 문구에 직접 쓰지 말고 `SITE.character`를 써요.
- 근거를 못 찾으면 추측하지 않고 '정확한 내용은 담당 매니저에게 문의해 주세요.'로 안내해요. 카톡 · 단톡방 문구는 쓰지 않아요.
- 예시 데이터라는 표시가 필요하면 화면에 '예시'라고 적어요.

## 8. import

- 🔒 상위 폴더 상대 경로(`../`)는 금지예요. `@/`를 써요. 같은 폴더는 `./` 가능해요.
- 🔒 타입만 가져올 때는 `import type`을 써요.
- 순서: ① 외부 패키지 → ② `@/` 내부 → ③ 같은 폴더 → ④ CSS. 그룹 사이에 빈 줄을 둬요.

## 9. 접근성

- 버튼은 `<button>`, 페이지 이동은 `<Link>`(`ButtonLink`)예요. `div`에 클릭을 달지 않아요.
- 아이콘만 있는 버튼에는 `aria-label`을 달아요. 예) 사이드바 접기, 질문 보내기, 답변 멈추기
- 현재 메뉴에는 `aria-current="page"`를 달아요.
- 글자는 12px 이상을 기본으로 해요 (11px은 보조 설명에만).

## 10. Git

- 브랜치: `main`은 항상 빌드되는 상태로 둬요. 작업은 `feat/…`, `fix/…`, `chore/…` 브랜치에서 해요.
- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/ko/)를 따라요.
  - `feat: 근거 못 찾음 답변 화면 추가`
  - `fix: 사이드바 최근 질문 줄바꿈 오류`
  - `chore: eslint 규칙 추가` · `docs:` · `refactor:` · `style:` · `test:`
- PR 전에 `npm run check`와 `npm run build`가 통과해야 해요.
