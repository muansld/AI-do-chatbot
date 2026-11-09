import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { InsightsDashboard } from "@/features/insights/components/InsightsDashboard";
import { getQuestionInsights } from "@/services/insights";

export const metadata: Metadata = { title: "질문 분석" };

/** 피그마 M4 질문 분석 (매니저 · 1단계, 보기 전용) */
export default async function ManagerInsightsPage() {
  const data = await getQuestionInsights({ period: "7d" });

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="질문 분석"
        description="교육생이 두에게 무엇을 묻는지, 두가 답하지 못한 질문은 무엇인지 보여 줘요."
      />
      <InsightsDashboard data={data} />
    </div>
  );
}
