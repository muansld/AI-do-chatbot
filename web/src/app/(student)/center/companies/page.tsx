import type { Metadata } from "next";

import { Tag } from "@/components/ui/Tag";
import type { TagTone } from "@/components/ui/Tag";
import { getCompanies } from "@/services/companies";
import type { CompanyStatus } from "@/types/domain";

export const metadata: Metadata = { title: "실습·인턴십 기업" };

const STATUS: Record<CompanyStatus, { label: string; tone: TagTone }> = {
  screening: { label: "서류 심사 중", tone: "neutral" },
  interview: { label: "면접 안내됨", tone: "info" },
  "extra-recruit": { label: "추가 모집", tone: "warning" },
  closed: { label: "마감", tone: "dark" },
};

/** 피그마 S4-2 센터 안내 · 실습·인턴십 기업 (노션 기업 리스트 연동 예정) */
export default async function CenterCompaniesPage() {
  const companies = await getCompanies();

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl bg-brand-faint px-5 py-4">
        <p className="typo-heading-16">13기 실습 · 인턴십 기업</p>
        <p className="typo-body-13 text-fg-secondary">
          센터 노션의 기업 리스트를 가져와 정리했어요
        </p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[640px] text-left">
          <thead className="bg-subtle typo-caption-12-medium text-fg-secondary">
            <tr>
              <th scope="col" className="px-5 py-3">
                기업 · 업종
              </th>
              <th scope="col" className="px-3 py-3">
                모집 직무
              </th>
              <th scope="col" className="px-3 py-3">
                구분
              </th>
              <th scope="col" className="px-3 py-3">
                인원
              </th>
              <th scope="col" className="px-3 py-3">
                근무지
              </th>
              <th scope="col" className="px-3 py-3">
                진행
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line typo-body-13">
            {companies.map((company) => (
              <tr key={company.id}>
                <td className="px-5 py-3">
                  <p className="typo-body-14-bold">{company.name}</p>
                  <p className="typo-caption-12 text-fg-tertiary">{company.industry}</p>
                </td>
                <td className="px-3 py-3">{company.role}</td>
                <td className="px-3 py-3">
                  <Tag tone={company.programType === "practicum" ? "warning" : "info"}>
                    {company.programType === "practicum" ? "실습" : "인턴십"}
                  </Tag>
                </td>
                <td className="px-3 py-3">{company.headcount}명</td>
                <td className="px-3 py-3 text-fg-secondary">{company.location}</td>
                <td className="px-3 py-3">
                  <Tag tone={STATUS[company.status].tone}>{STATUS[company.status].label}</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="typo-caption-12 text-fg-tertiary">
        기업 이름은 예시예요 · 기업 담당자 연락처는 공개하지 않아요
      </p>
    </div>
  );
}
