import Image from 'next/image';

import type { BoxInfoType, CardData, FooterData } from '@/lib/types';

import { Bubble } from '@/components/atoms/bubble';
import { TextXS } from '@/components/atoms/text-xs';
import { Card } from '@/components/molecules/card';
import { Checkbox } from '@/components/molecules/checkbox';
import { Navbar } from '@/components/molecules/navbar';
import { TextInfo } from '@/components/molecules/text-info';
import { ImageCarousel } from '@/components/templates/image-carousel';
import { BoxInfo } from '@/components/atoms/box-info';
import { TextIcon } from '@/components/molecules/text-with-icon';

import { getBoxInfo, getCard, getCheckbox, getFooter, getTextIcon } from '@/lib/call-api';
import logo from '@/assets/logo.png';

export default async function Home() {
  const footerData = await getFooter();
  const cardData = await getCard();
  const textIcon = await getTextIcon();
  const boxInfo = await getBoxInfo();
  const checkbox = await getCheckbox();

  return (
    <>
      <div className="bg-gradient-to-r from-[#26c2b9] to-[#288be7]">
        <div className="container mx-auto flex max-w-screen-lg flex-col">
          <Navbar />
          <div className="lg:flex lg:gap-x-[14px] lg:pt-[60px]">
            <div className="px-4 py-9">
              <div className="flex flex-col space-y-4">
                <Bubble text="풀타임, 파트타임" />
                <h1 className="text-4xl font-black text-white">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
                <p className="w-full text-lg text-white lg:max-w-[361px]">
                  법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                </p>
                <p className="hidden text-lg font-black text-white underline lg:flex">개발자가 필요하신가요?</p>
              </div>
              <div className="hidden gap-x-12 lg:my-[60px] lg:flex">
                {boxInfo.map((item: BoxInfoType, index: number) => (
                  <BoxInfo key={index} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <Bubble text="월 100만원" isDollarSign />
              </div>
              <div className="mt-4 self-center px-4">
                <ImageCarousel />
              </div>
            </div>
            <div className="mb-4 mt-6 flex flex-wrap items-center justify-start gap-2 px-4 lg:hidden">
              {checkbox.map((item: { id: number; text: string }, index: number) => (
                <Checkbox key={index} text={item.text} />
              ))}
            </div>
            <p className="mb-[60px] px-4 font-black text-[#FBFF23] underline lg:hidden">개발자가 필요하신가요?</p>
          </div>
          <div className="hidden lg:mb-24 lg:flex lg:flex-wrap lg:items-center lg:gap-[10px]">
            {textIcon.map((item: CardData, index: number) => (
              <TextIcon key={index} icon={item.iconUrl} text={item.text} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] px-4 py-16">
        <div className="container mx-auto max-w-screen-lg">
          <div className="flex flex-col lg:flex-row lg:gap-40">
            <div className="space-y-[18px]">
              <div className="space-y-4">
                <Image src={logo} alt="logo" />
                <p className="max-w-[247px] text-sm font-black text-[#343741]">
                  우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
                </p>
              </div>
              <div className="space-y-2">
                <TextXS text="010-0000-0000" />
                <TextXS text="aaaaa@naver.com" />
              </div>
            </div>
            <div className="mb-[60px] mt-[18px] flex flex-wrap gap-2 lg:mb-11 lg:mt-0 lg:gap-4">
              {cardData.map((item: CardData, index: number) => (
                <Card key={index} text={item.text} icon={item.iconUrl} />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-9">
            {footerData.map((item: FooterData, index: number) => (
              <TextInfo key={index} title={item.title} body={item.body} footer={item.footer} />
            ))}
          </div>
          <TextXS text="&#169; 2023 Hyperhire" className="mt-9" />
        </div>
      </div>
    </>
  );
}
