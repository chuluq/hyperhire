import Image from 'next/image';

import code from '@/assets/icon-code.png';
import rightArrow from '@/assets/icon-arrow-right-square.png';

export const Card = () => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-xl gap-4 w-[160px] h-[163px]">
      <div className="space-y-3">
        <div className="size-10 bg-[#eff1f6] rounded-lg p-2 gap-[10px]">
          <Image src={code} alt="icon-code" />
        </div>
        <p className="text-sm font-black text-[#343741]">해외 개발자 원격 채용</p>
      </div>
      <div className="flex items-center gap-x-2">
        <p className="font-black text-sm text-[#5E626F]">바로가기</p>
        <Image src={rightArrow} alt="icon-arrow-right-square" width={20} height={20} />
      </div>
    </div>
  );
};
