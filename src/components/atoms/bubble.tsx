import { cn } from '@/lib/utils';

export const Bubble = ({ text, isDollarSign = false }: { text: string; isDollarSign?: boolean }) => {
  return (
    <div
      className={cn(
        "relative flex w-fit items-center gap-x-2 rounded-2xl px-4 py-2 after:absolute after:bottom-0 after:-mb-2 after:-ml-4 after:h-0 after:w-0 after:border-[16px] after:border-b-0 after:border-solid after:border-transparent after:content-['']",
        {
          'bg-[#8BC4FF] after:left-7 after:border-t-[#8BC4FF]': !isDollarSign,
          'bg-[#E9F7EF] after:left-1/2 after:border-t-[#E9F7EF]': isDollarSign,
        },
      )}>
      {isDollarSign ? (
        <div className="flex size-[26px] items-center justify-center rounded-full border-2 bg-[#BBF3D2]">
          <p className="text-lg text-[#00C696]">$</p>
        </div>
      ) : null}
      <p
        className={cn('text-lg font-black', {
          'text-white': !isDollarSign,
          'text-[#00C696]': isDollarSign,
        })}>
        {text}
      </p>
    </div>
  );
};
