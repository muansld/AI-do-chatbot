import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ScheduleEventList } from "@/features/schedule/components/ScheduleEventList";
import { getScheduleEvents } from "@/services/schedule";

export const metadata: Metadata = { title: "커리큘럼·일정" };

/** 피그마 S3 (창업) · S3-1 (취업) · Mo-3 */
export default async function SchedulePage() {
  const events = await getScheduleEvents();

  return (
    <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-10 md:px-0">
      <PageHeader
        title="커리큘럼·일정"
        description="가이드북 시간표를 그대로 옮겼어요. 구글 캘린더로 보내면 바뀐 일정도 자동으로 따라와요."
        actions={
          <>
            <Button variant="secondary">PDF 다운로드</Button>
            <Button>구글 캘린더로 보내기</Button>
          </>
        }
      />
      <ScreenPlaceholder
        figma="S3 · S3-1"
        title="단계 카드 · 월 달력 · 선택한 날 · 다가오는 주요 일정"
      />
      <ScheduleEventList events={events} />
    </div>
  );
}
