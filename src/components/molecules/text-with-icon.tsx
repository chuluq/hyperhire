import Image, { type StaticImageData } from 'next/image';

interface TextIconProps {
  icon: StaticImageData;
  text: string;
}

export const TextIcon = ({ icon, text }: TextIconProps) => {
  return (
    <div className="flex min-w-[332px] items-center gap-6 rounded-xl bg-white bg-opacity-20 p-4">
      <div className="flex items-center justify-center gap-[10px] rounded-lg bg-white bg-opacity-40 p-3">
        <Image src={icon} alt="text-icon" width={32} height={32} />
      </div>
      <p className="flex-1 text-2xl font-black text-white">{text}</p>
    </div>
  );
};
