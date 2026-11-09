import { clubBooths, clubNews } from "@/mocks/clubs";
import type { ClubBooth, ClubNews } from "@/types/domain";

export async function getClubBooths(): Promise<ClubBooth[]> {
  return clubBooths;
}

export async function getClubBooth(boothId: string): Promise<ClubBooth | undefined> {
  return clubBooths.find((b) => b.id === boothId);
}

export async function getClubNews(): Promise<ClubNews[]> {
  return clubNews;
}
