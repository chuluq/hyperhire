import Image from 'next/image';

import { Bubble } from '@/components/atoms/bubble';
import { TextXS } from '@/components/atoms/text-xs';
import { Card } from '@/components/molecules/card';
import { Checkbox } from '@/components/molecules/checkbox';
import { Navbar } from '@/components/molecules/navbar';
import { TextInfo } from '@/components/molecules/text-info';
import { ImageCarousel } from '@/components/templates/image-carousel';
import { BoxInfo } from '@/components/atoms/box-info';
import { TextIcon } from '@/components/molecules/text-with-icon';

import logo from '@/assets/logo.png';
import code from '@/assets/icon-code.png';
import user from '@/assets/icon-user.png';
import kor from '@/assets/icon-kor.png';
import setting from '@/assets/icon-setting.png';
import marketing from '@/assets/icon-marketing.png';
import image from '@/assets/icon-image.png';
import box from '@/assets/icon-box.png';
import target from '@/assets/icon-target.png';
import call from '@/assets/icon-call.png';

export default function Home() {
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
                <BoxInfo title="평균 월 120만원" body="임금을 해당 국가를 기준으로 계산합니다." />
                <BoxInfo title="최대 3회 인력교체" body="막상 채용해보니 맞지 않아도 걱정하지 마세요. " />
                <BoxInfo title="평균 3일, 최대 10일" body="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다." />
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
              <Checkbox text="한국어 능력" />
              <Checkbox text="업무 수행 능력" />
              <Checkbox text="겸업 여부" />
              <Checkbox text="평판 조회" />
            </div>
            <p className="mb-[60px] px-4 font-black text-[#FBFF23] underline lg:hidden">개발자가 필요하신가요?</p>
          </div>
          <div className="hidden lg:mb-24 lg:flex lg:flex-wrap lg:items-center lg:gap-[10px]">
            <TextIcon icon={marketing} text="해외 마케팅" />
            <TextIcon icon={image} text="퍼블리셔" />
            <TextIcon icon={box} text="캐드원(제도사)" />
            <TextIcon icon={target} text="해외 세일즈" />
            <TextIcon icon={call} text="해외 CS" />
          </div>
        </div>
      </div>
      <div className="bg-[#FBFBFB] px-4 py-16">
        <div className="space-y-4">
          <Image src={logo} alt="logo" />
          <p className="max-w-[247px] text-sm font-black text-[#343741]">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
        </div>
        <div className="mt-[18px] space-y-2">
          <TextXS text="010-0000-0000" />
          <TextXS text="aaaaa@naver.com" />
        </div>
        <div className="mb-[60px] mt-[18px] flex flex-wrap gap-2">
          <Card text="해외 개발자 원격 채용" icon={code} />
          <Card text="외국인 원격 채용 (비개발)" icon={user} />
          <Card text="한국어 가능 외국인 채용" icon={kor} />
          <Card text="해외 개발자 활용 서비스" icon={setting} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-9">
          <TextInfo title="상호명" body="하이퍼하이어" footer="Hyperhire India Private Limited" />
          <TextInfo title="대표 CEO" body="김주현" footer="Juhyun Kim" />
          <TextInfo title="사업자등록번호 CIN" body="427-86-01187" footer="U74110DL2016PTC290812" />
          <TextInfo
            title="주소 ADDRESS"
            body="서울특별시 강남대로 479, 지하 1층 238호"
            footer="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
          />
        </div>
        <TextXS text="&#169; 2023 Hyperhire" className="mt-9" />
      </div>
    </>
  );
}
