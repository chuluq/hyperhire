import Image from 'next/image';

import checkbox from '@/assets/icon-checkbox.png';

export const Checkbox = ({ text }: { text: string }) => {
  return (
    <div className="flex w-32 grow items-center gap-x-3">
      <Image src={checkbox} alt="icon-checkbox" width={20} height={20} />
      <p className="font-black text-white">{text}</p>
    </div>
  );
};
