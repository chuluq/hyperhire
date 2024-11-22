import { type StaticImageData } from 'next/image';

export interface FooterData {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface CardData {
  id: number;
  iconUrl: StaticImageData;
  text: string;
}

export type BoxInfoType = Omit<FooterData, 'footer'>;
