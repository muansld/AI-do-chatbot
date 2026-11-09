import { ButtonLink } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { ROUTES } from "@/lib/constants/routes";

/** 피그마 E1 찾는 페이지 없음 (404) */
export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <EmptyState
        title="찾는 페이지가 없어요"
        description={
          "주소가 바뀌었거나 지난 기수 자료일 수 있어요.\n홈에서 다시 찾거나 두에게 물어보세요."
        }
        actions={
          <>
            <ButtonLink href={ROUTES.home} variant="secondary">
              홈으로
            </ButtonLink>
            <ButtonLink href={ROUTES.ask}>AI에게 묻기</ButtonLink>
          </>
        }
      />
    </main>
  );
}
