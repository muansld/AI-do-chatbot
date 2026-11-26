import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * 교육생 화면 공통 틀: 헤더 + 본문 + 푸터.
 * 홈(S1)은 이 그룹 밖에 있어서 헤더 · 푸터 없이 질문창만 보여요.
 */
export default function StudentShellLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </>
  );
}
