import { PageHeader } from "@/components/layout/PageHeader";
import { CenterTabs } from "@/features/center/components/CenterTabs";

/** 센터 안내 공통 틀 (피그마 S4 · S4-1 · S4-2 · Mo-4) */
export default function CenterLayout({ children }: LayoutProps<"/center">) {
  return (
    <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 md:px-0">
      <PageHeader
        title="센터 안내"
        description="공지, 실습·인턴십 기업, 자주 묻는 질문, 서류 양식, 문의 방법을 한곳에 모았어요."
      />
      <CenterTabs />
      {children}
    </div>
  );
}
