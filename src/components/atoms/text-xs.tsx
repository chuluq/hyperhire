import { cn } from '@/lib/utils';

interface TextXSProps extends React.ComponentProps<'p'> {
  text: string;
}

export const TextXS = ({ text, className }: TextXSProps) => {
  return <p className={cn('text-xs font-black text-[#5E626F]', className)}>{text}</p>;
};
