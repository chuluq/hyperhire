import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import rightArrow from '@/assets/icon-arrow-right-square.png';

interface CardProps {
  text: string;
  icon: StaticImageData;
}

export const Card = ({ text, icon }: CardProps) => {
  return (
    <div className="flex h-[163px] w-[160px] flex-col gap-4 rounded-xl bg-white p-4">
      <div className="space-y-3">
        <div className="flex size-10 items-center justify-center gap-[10px] rounded-lg bg-[#eff1f6] p-2">
          <Image src={icon} alt="icon-card" />
        </div>
        <p className="text-sm font-black text-[#343741]">{text}</p>
      </div>
      <Link href="#" className="flex items-center gap-x-2">
        <p className="text-sm font-black text-[#5E626F]">바로가기</p>
        <Image src={rightArrow} alt="icon-arrow-right-square" width={20} height={20} />
      </Link>
    </div>
  );
};
