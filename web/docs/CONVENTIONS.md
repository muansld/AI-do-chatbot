# 코드 규칙 (Conventions)

팀이 같은 방식으로 쓰기 위한 약속이에요. 도구로 강제되는 규칙(🔒)과 리뷰에서 보는 규칙으로 나눠요.

## 1. 폴더와 책임

| 폴더                | 무엇을 둬요                                                                  | 두지 않아요                                                     |
| ------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `app/`              | `page` · `layout` · `error` · `not-found` · `loading` 같은 **라우트 파일만** | 재사용 컴포넌트, 데이터 가공 로직                               |
| `components/ui`     | 도메인을 모르는 공용 부품 (Button, Tag …)                                    | 특정 화면에서만 쓰는 부품                                       |
| `components/layout` | 화면 틀 (헤더 · 푸터 · 사이드바 · 탭 바)                                     | 데이터 조회 (단, 서버 컴포넌트에서 services 호출은 OK)          |
| `features/<도메인>` | 그 도메인의 컴포넌트 · 훅 · 상태                                             | 다른 도메인 코드 직접 가져오기 (필요하면 `components`로 올려요) |
| `services/`         | 데이터 조회 · 변경 함수 (지금은 목 데이터)                                   | UI                                                              |
| `mocks/`            | 목 데이터                                                                    | — (`services` 밖에서 가져오지 않아요)                           |
| `types/`            | 도메인 타입                                                                  | 컴포넌트 props 타입 (컴포넌트 파일에 둬요)                      |
| `lib/`              | 순수 함수 · 상수                                                             | React 코드                                                      |

- 한 화면에서만 쓰는 부품이 커지면 `features/<도메인>/components`로 옮겨요.
- `features/<도메인>` 안 구조: `components/` · `hooks/` · `store.ts` · `utils.ts` (필요한 것만).

## 2. 이름 짓기

| 대상                     | 규칙                        | 예                                |
| ------------------------ | --------------------------- | --------------------------------- |
| 컴포넌트 파일 · 컴포넌트 | PascalCase                  | `SiteHeader.tsx` / `SiteHeader`   |
| 훅                       | `use` + camelCase           | `usePreferences`                  |
| 그 밖의 파일             | camelCase                   | `routes.ts`, `track.ts`           |
| 라우트 폴더              | kebab-case (영문)           | `center/companies`, `cohorts/new` |
| 상수                     | UPPER_SNAKE_CASE            | `ROUTES`, `TRACK_LABEL`           |
| 타입 · 인터페이스        | PascalCase, `I` 접두어 없음 | `ScheduleEvent`, `ButtonProps`    |
| 이벤트 props             | `on` + 동사                 | `onSelect`                        |
| 불리언                   | `is` · `has` · `can`        | `isActive`, `hasError`            |

- 페이지 컴포넌트 이름은 `~Page`, 레이아웃은 `~Layout`으로 끝나요.
- 코드 식별자는 영어, 화면 문구 · 주석은 한국어로 써요.

## 3. 컴포넌트

- **기본은 서버 컴포넌트**예요. 상태 · 이벤트 · 브라우저 API가 필요한 곳만 `"use client"`를 붙이고, 가능한 한 작은 단위(잎사귀)로 내려요.
- `export default`는 Next 라우트 파일(`page`, `layout` …)에만 써요. 나머지는 **이름 있는 export**예요.
- props 타입은 `interface ~Props`로 컴포넌트 바로 위에 둬요.
- 화면에 피그마 프레임 번호를 주석으로 남겨요. 예) `/** 피그마 S4-2 … */`
- 아직 못 옮긴 부분은 `ScreenPlaceholder`로 표시하고, 구현하면 지워요.

## 4. 데이터

- 화면은 데이터를 **`@/services/*` 함수로만** 가져와요. `@/mocks`를 직접 가져오지 않아요.
- services 함수는 모두 `async`이고 `src/types/domain.ts` 타입을 돌려줘요.
- 기수 · 트랙처럼 교육생이 고르는 값은 `features/preferences`의 `usePreferences()`로만 읽고 써요. (로그인 없음 · 브라우저에만 저장)
- 서버에서 전체 데이터를 받아 클라이언트 컴포넌트에서 기수 · 트랙으로 거르는 방식을 기본으로 해요. (`ScheduleEventList` 참고)
- Cache Components가 켜져 있어요. `cookies()` · `headers()` · `searchParams`처럼 요청마다 다른 값을 읽는 컴포넌트는 `<Suspense>`로 감싸요.

## 5. 스타일

- 🔒 Prettier가 Tailwind 클래스 순서를 자동으로 맞춰요.
- **색 · 모서리 · 그림자 · 글자는 토큰만** 써요. hex 값이나 `text-[13px]` 같은 임의 값은 쓰지 않아요.
  - 색: `text-fg` · `text-fg-secondary` · `bg-subtle` · `border-line` · `bg-brand` …
  - 글자: 피그마 텍스트 스타일 이름 그대로 `typo-title-26`, `typo-body-14-medium` …
  - 모서리: `rounded-sm`(6) · `rounded-lg`(12) · `rounded-xl`(16) · `rounded-2xl`(20)
  - 그림자: `shadow-xs` · `shadow-sm` · `shadow-md` · `shadow-lg`
- 토큰이 없으면 **피그마에 먼저 추가**하고 `tokens.css`에 옮겨요.
- 조건부 클래스는 `cn()`으로 합쳐요.
- 반응형은 모바일 먼저: 기본이 모바일(390), `md:`(768 이상)부터 데스크톱이에요.

## 6. import

- 🔒 상위 폴더 상대 경로(`../`)는 금지예요. `@/`를 써요. 같은 폴더는 `./` 가능해요.
- 🔒 타입만 가져올 때는 `import type`을 써요.
- 순서: ① 외부 패키지 → ② `@/` 내부 → ③ 같은 폴더 → ④ CSS. 그룹 사이에 빈 줄을 둬요.

## 7. 접근성

- 버튼은 `<button>`, 페이지 이동은 `<Link>`(`ButtonLink`)예요. `div`에 클릭을 달지 않아요.
- 아이콘만 있는 버튼에는 `aria-label`을 달아요.
- 현재 메뉴에는 `aria-current="page"`를 달아요.
- 글자는 12px 이상을 기본으로 해요 (11px은 보조 설명에만).
- 이미지 속 글자(포스터 · 배너)는 `alt`나 화면에 보이는 텍스트로 같은 내용을 줘요.

## 8. Git

- 브랜치: `main`은 항상 빌드되는 상태로 둬요. 작업은 `feat/…`, `fix/…`, `chore/…` 브랜치에서 해요.
- 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/ko/)를 따라요.
  - `feat: 센터 안내 기업 리스트 표 추가`
  - `fix: 모바일 탭 바 활성 표시 오류`
  - `chore: eslint 규칙 추가` · `docs:` · `refactor:` · `style:` · `test:`
- PR 전에 `npm run check`와 `npm run build`가 통과해야 해요.
