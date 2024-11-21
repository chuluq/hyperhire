import Image from 'next/image';

import { Navbar } from '@/components/navbar';
import { Bubble } from '@/components/atoms/bubble';
import { Card } from '@/components/molecules/card';
import { Checkbox } from '@/components/molecules/checkbox';

import logo from '@/assets/logo.png';
import code from '@/assets/icon-code.png';
import user from '@/assets/icon-user.png';
import kor from '@/assets/icon-kor.png';
import setting from '@/assets/icon-setting.png';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#26c2b9] to-[#288be7]">
        <div className="container mx-auto flex flex-col">
          <Navbar />
          <div className="flex flex-col space-y-4 px-4 py-9">
            <Bubble text="풀타임, 파트타임" />
            <h1 className="text-4xl font-black text-white">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
            <p className="text-lg text-white">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
          </div>
          <div className="flex items-center justify-center">
            <Bubble text="월 100만원" isDollarSign />
          </div>

          {/* Carousel */}

          <div className="mb-4 mt-6 flex flex-wrap items-center justify-start gap-2 px-4">
            <Checkbox text="한국어 능력" />
            <Checkbox text="업무 수행 능력" />
            <Checkbox text="겸업 여부" />
            <Checkbox text="평판 조회" />
          </div>
          <p className="mb-[60px] px-4 font-black text-[#FBFF23] underline">개발자가 필요하신가요?</p>
        </div>
      </div>
      <div className="bg-[#FBFBFB] px-4 py-16">
        <div className="container mx-auto">
          <div className="space-y-4">
            <Image src={logo} alt="logo" />
            <p className="max-w-[247px] text-sm font-black text-[#343741]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
          </div>
          <div className="mt-[18px] space-y-2">
            <p className="text-[13px] font-black text-[##5E626F]">010-0000-0000</p>
            <p className="text-[13px] font-black text-[##5E626F]">aaaaa@naver.com</p>
          </div>
          <div className="mb-[60px] mt-[18px] flex flex-wrap gap-2">
            <Card text="해외 개발자 원격 채용" icon={code} />
            <Card text="외국인 원격 채용 (비개발)" icon={user} />
            <Card text="한국어 가능 외국인 채용" icon={kor} />
            <Card text="해외 개발자 활용 서비스" icon={setting} />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-9">
            <div>
              <p className="text-xs font-black text-[#343741]">상호명</p>
              <p className="mb-[5px] mt-[10px] text-xs font-black text-[#5E626F]">하이퍼하이어</p>
              <p className="text-xs font-black text-[#5E626F]">Hyperhire India Private Limited</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">대표 CEO</p>
              <p className="mb-[5px] mt-[10px] text-xs font-black text-[#5E626F]">김주현</p>
              <p className="text-xs font-black text-[#5E626F]">Juhyun Kim</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">사업자등록번호 CIN</p>
              <p className="mb-[5px] mt-[10px] text-xs font-black text-[#5E626F]">427-86-01187</p>
              <p className="text-xs font-black text-[#5E626F]">U74110DL2016PTC290812</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">주소 ADDRESS</p>
              <p className="mb-[5px] mt-[10px] text-xs font-black text-[#5E626F]">
                서울특별시 강남대로 479, 지하 1층 238호
              </p>
              <p className="text-xs font-black text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
          <p className="mt-9 text-xs font-black text-[#5E626F]">ⓒ 2023 Hyperhire</p>
        </div>
      </div>
    </>
  );
}
