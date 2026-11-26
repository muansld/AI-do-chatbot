import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder";
import { ScheduleEventList } from "@/features/schedule/components/ScheduleEventList";
import { getScheduleEvents } from "@/services/schedule";

export const metadata: Metadata = { title: "센터 일정" };

/**
 * 피그마 S3 센터 일정 · S3-1 ~ S3-6.
 * 보기(센터 일정 · 취업 · 창업) · 기수 · 달은 URL로 들고 다녀요. 예) /schedule?view=employment&cohort=13&month=2026-11
 */
export default async function SchedulePage() {
  const events = await getScheduleEvents();

  return (
    <div className="mx-auto flex w-full max-w-page flex-col gap-8 px-4 py-10 md:px-0">
      <PageHeader
        title="센터 일정"
        description="센터 전체 일정이 기본으로 보여요. 트랙과 기수를 고르면 매일 일정이 보여요."
        actions={<Button variant="secondary">구글 캘린더로 보내기</Button>}
      />
      <ScreenPlaceholder
        figma="S3 · S3-1 ~ S3-6"
        title="보기 · 기수 선택 · 월 달력 · 선택한 날 · 다가오는 주요 일정"
      />
      <ScheduleEventList events={events} />
    </div>
  );
}
