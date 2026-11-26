import type { ReactNode } from "react";

import { Tag } from "@/components/ui/Tag";
import type { TagTone } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";
import { SCOPE_LABEL, SCOPE_ORDER } from "@/lib/constants/site";
import type { HandoffReason, QuestionInsights, QuestionKind } from "@/types/domain";

const KIND_LABEL: Record<QuestionKind, string> = {
  rule: "규정 질문",
  schedule: "일정 질문",
  "personal-record": "개인 기록 질문",
  "out-of-scope": "범위 밖 질문",
};

const REASON: Record<HandoffReason, { label: string; tone: TagTone }> = {
  "no-source": { label: "근거 없음", tone: "danger" },
  ambiguous: { label: "해석이 갈림", tone: "warning" },
  "negative-feedback": { label: "“아니요” 피드백", tone: "neutral" },
};

const SCOPE_BAR = { common: "bg-brand", employment: "bg-employment", startup: "bg-startup" };

const numberFormat = new Intl.NumberFormat("ko-KR");
const timeFormat = new Intl.DateTimeFormat("ko-KR", {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Seoul",
});

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <section className={cn("rounded-xl border border-line bg-surface px-6 py-5", className)}>
      {children}
    </section>
  );
}

function Bar({ percent, className }: { percent: number; className: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-muted" aria-hidden>
      <div className={cn("h-full rounded-full", className)} style={{ width: `${percent}%` }} />
    </div>
  );
}

/** 피그마 M4 질문 분석 (매니저 · 1단계, 보기 전용) */
export function InsightsDashboard({ data }: { data: QuestionInsights }) {
  const maxCount = Math.max(...data.topQuestions.map((q) => q.count));
  const stats = [
    {
      label: "전체 질문",
      value: `${numberFormat.format(data.totalQuestions)}건`,
      hint: `지난주보다 ${data.weekOverWeekPercent}% 늘었어요`,
    },
    {
      label: "두가 바로 답한 비율",
      value: `${data.answeredRate}%`,
      hint: "목표 80% 이상",
      good: true,
    },
    {
      label: "매니저 안내로 넘어간 질문",
      value: `${data.handoffCount}건`,
      hint: `근거 없음 ${data.handoffBreakdown.noSource} · 해석이 갈림 ${data.handoffBreakdown.ambiguous}`,
    },
    {
      label: "“도움이 안 됐어요”",
      value: `${((data.negativeFeedback.count / data.negativeFeedback.total) * 100).toFixed(1)}%`,
      hint: `피드백 ${data.negativeFeedback.total}건 중 ${data.negativeFeedback.count}건`,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <dl className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="flex flex-col gap-1">
            <dt className="typo-body-13 text-fg-secondary">{s.label}</dt>
            <dd className="typo-title-24">{s.value}</dd>
            <dd
              className={cn("typo-caption-12", s.good ? "text-startup-strong" : "text-fg-tertiary")}
            >
              {s.hint}
            </dd>
          </Card>
        ))}
      </dl>

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="typo-heading-16">많이 들어온 질문</h2>
            <span className="typo-caption-12 text-fg-tertiary">비슷한 질문끼리 묶어서 세요</span>
          </div>
          <ol className="divide-y divide-line">
            {data.topQuestions.map((q, index) => (
              <li key={q.id} className="flex items-center gap-3 py-3">
                <span
                  className={cn(
                    "w-5 typo-body-14-bold",
                    index < 3 ? "text-brand" : "text-fg-tertiary",
                  )}
                >
                  {index + 1}
                </span>
                <span className="flex-1 typo-body-14-medium">{q.representative}</span>
                <Tag>{q.topic}</Tag>
                <Tag tone={q.scope === "employment" ? "warning" : "neutral"}>
                  {SCOPE_LABEL[q.scope]}
                </Tag>
                <div className="w-28">
                  <Bar
                    percent={(q.count / maxCount) * 100}
                    className={index < 3 ? "bg-brand" : "bg-line-strong"}
                  />
                </div>
                <span className="w-12 text-right typo-body-13-medium">{q.count}건</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card className="flex flex-col gap-3">
          <h2 className="typo-heading-16">질문 종류</h2>
          {(Object.keys(KIND_LABEL) as QuestionKind[]).map((kind) => (
            <div key={kind} className="flex flex-col gap-1.5">
              <div className="flex justify-between typo-body-13">
                <span>{KIND_LABEL[kind]}</span>
                <span className="typo-body-13-medium">{data.kindRatio[kind]}%</span>
              </div>
              <Bar
                percent={data.kindRatio[kind]}
                className={kind === "rule" || kind === "schedule" ? "bg-brand" : "bg-line-strong"}
              />
            </div>
          ))}
          <hr className="border-line" />
          <h2 className="typo-heading-16">범위별</h2>
          {SCOPE_ORDER.map((scope) => (
            <div key={scope} className="flex flex-col gap-1.5">
              <div className="flex justify-between typo-body-13">
                <span>{SCOPE_LABEL[scope]}</span>
                <span className="typo-body-13-medium">{data.scopeRatio[scope]}%</span>
              </div>
              <Bar percent={data.scopeRatio[scope]} className={SCOPE_BAR[scope]} />
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="typo-heading-16">두가 답하지 못한 질문</h2>
          <Tag tone="warning">보기만 가능 · 답변 등록은 2단계</Tag>
        </div>
        <ul className="divide-y divide-line">
          {data.unanswered.map((u) => (
            <li key={u.id} className="flex items-center gap-3 py-3">
              <span className="flex-1 typo-body-14">{u.question}</span>
              <Tag tone={REASON[u.reason].tone}>{REASON[u.reason].label}</Tag>
              <Tag tone={u.scope === "employment" ? "warning" : "neutral"}>
                {SCOPE_LABEL[u.scope]}
              </Tag>
              <time dateTime={u.askedAt} className="typo-caption-12 text-fg-tertiary">
                {timeFormat.format(new Date(u.askedAt))}
              </time>
            </li>
          ))}
        </ul>
      </Card>

      <p className="typo-caption-12 text-fg-tertiary">
        숫자와 질문은 예시예요 · 실제로는 질문 기록과 피드백에서 집계해요
      </p>
    </div>
  );
}
