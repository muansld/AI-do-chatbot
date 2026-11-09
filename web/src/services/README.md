# services — 데이터 접근 계층

- 화면(page · 컴포넌트)은 데이터를 **반드시 이 폴더의 함수로만** 가져와요.
- 지금은 `src/mocks`의 목 데이터를 돌려줘요. 백엔드 · AI 서버를 연동할 때는 **이 폴더 안쪽만** `fetch`로 바꿔요. 화면 코드는 바뀌지 않아요.
- 모든 함수는 `async`예요. 나중에 네트워크 호출로 바꿔도 시그니처가 같아요.
- 파일은 도메인 하나에 하나씩 둬요: `notices.ts`, `schedule.ts`, `companies.ts`, `clubs.ts`, `cohorts.ts`
- 함수 이름은 `get~`(조회), `create~` · `update~` · `delete~`(변경)로 시작해요.
- API 응답 모양이 `src/types/domain.ts`와 다르면, 여기서 도메인 타입으로 바꿔서(매핑해서) 돌려줘요.
