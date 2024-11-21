export const TextInfo = ({ title, body, footer }: { title: string; body: string; footer: string }) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-black text-[#343741]">{title}</p>
      <p className="mb-[5px] mt-[10px] text-xs font-black text-[#5E626F]">{body}</p>
      <p className="text-xs font-black text-[#5E626F]">{footer}</p>
    </div>
  );
};
