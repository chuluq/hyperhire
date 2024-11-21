import Image from 'next/image';

import { Navbar } from '@/components/navbar';
import { Card } from '@/components/card';

import logo from '@/assets/logo.png';
import checkbox from '@/assets/icon-checkbox.png';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#26c2b9] to-[#288be7]">
        <div className="container mx-auto flex flex-col">
          <Navbar />
          <div className="flex flex-col space-y-4 px-4 py-9">
            <div className="bg-[#8BC4FF] py-[6px] px-3 rounded-lg gap-[10px] max-w-fit">
              <p className="font-black text-lg text-white">풀타임, 파트타임</p>
            </div>
            <h1 className=" font-black text-white text-4xl">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
            <p className="text-lg text-white ">법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
          </div>
          <div className="bg-[#E9F7EF] flex items-center self-center justify-center py-2 px-3 rounded-lg gap-[10px] max-w-fit">
            <div className="border-2 flex items-center justify-center bg-[#BBF3D2] size-[26px] rounded-full">
              <p className="text-[#00C696]">$</p>
            </div>
            <p className="font-black text-lg text-[#00C696]">월 100만원</p>
            {/* Carousel */}
          </div>
          <div className="mt-6 mb-4 px-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-x-3">
              <Image src={checkbox} alt="icon-checkbox" width={20} height={20} />
              <p className="font-black text-white">한국어 능력</p>
            </div>
            <div className="flex items-center gap-x-3">
              <Image src={checkbox} alt="icon-checkbox" width={20} height={20} />
              <p className="font-black text-white">한국어 능력</p>
            </div>
            <div className="flex items-center gap-x-3">
              <Image src={checkbox} alt="icon-checkbox" width={20} height={20} />
              <p className="font-black text-white">한국어 능력</p>
            </div>
            <div className="flex items-center gap-x-3">
              <Image src={checkbox} alt="icon-checkbox" width={20} height={20} />
              <p className="font-black text-white">한국어 능력</p>
            </div>
          </div>
          <p className="font-black underline text-[#FBFF23] px-4 mb-[60px]">개발자가 필요하신가요?</p>
        </div>
      </div>
      <div className="bg-[#FBFBFB] px-4 py-16">
        <div className="container mx-auto">
          <div className="space-y-4">
            <Image src={logo} alt="logo" />
            <p className="font-black text-[#343741] text-sm max-w-[247px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
          </div>
          <div className="mt-[18px] space-y-2">
            <p className="font-black text-[##5E626F] text-[13px]">010-0000-0000</p>
            <p className="font-black text-[##5E626F] text-[13px]">aaaaa@naver.com</p>
          </div>
          <div className="mt-[18px] mb-[60px] flex flex-wrap gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-9">
            <div>
              <p className="text-xs font-black text-[#343741]">상호명</p>
              <p className="text-xs font-black text-[#5E626F] mt-[10px] mb-[5px]">하이퍼하이어</p>
              <p className="text-xs font-black text-[#5E626F]">Hyperhire India Private Limited</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">대표 CEO</p>
              <p className="text-xs font-black text-[#5E626F] mt-[10px] mb-[5px]">김주현</p>
              <p className="text-xs font-black text-[#5E626F]">Juhyun Kim</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">사업자등록번호 CIN</p>
              <p className="text-xs font-black text-[#5E626F] mt-[10px] mb-[5px]">427-86-01187</p>
              <p className="text-xs font-black text-[#5E626F]">U74110DL2016PTC290812</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#343741]">주소 ADDRESS</p>
              <p className="text-xs font-black text-[#5E626F] mt-[10px] mb-[5px]">
                서울특별시 강남대로 479, 지하 1층 238호
              </p>
              <p className="text-xs font-black text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </p>
            </div>
          </div>
          <p className="text-xs font-black text-[#5E626F] mt-9">ⓒ 2023 Hyperhire</p>
        </div>
      </div>
    </>
  );
}
