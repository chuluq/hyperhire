import { TextXS } from '@/components/atoms/text-xs';

export const CardTag = ({ text }: { text: string }) => {
  return (
    <div className="w-fit gap-[10px] rounded-md border border-solid border-[#C1C5CF] px-3 py-1">
      <TextXS text={text} className="text-sm" />
    </div>
  );
};
