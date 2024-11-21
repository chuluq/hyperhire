import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import rightArrow from '@/assets/icon-arrow-right-square.png';

interface CardProps {
  text: string;
  icon: StaticImageData;
}

export const Card = ({ text, icon }: CardProps) => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-xl gap-4 w-[160px] h-[163px]">
      <div className="space-y-3">
        <div className="flex justify-center items-center size-10 bg-[#eff1f6] rounded-lg p-2 gap-[10px]">
          <Image src={icon} alt="icon-card" />
        </div>
        <p className="text-sm font-black text-[#343741]">{text}</p>
      </div>
      <Link href="#" className="flex items-center gap-x-2">
        <p className="font-black text-sm text-[#5E626F]">바로가기</p>
        <Image src={rightArrow} alt="icon-arrow-right-square" width={20} height={20} />
      </Link>
    </div>
  );
};
