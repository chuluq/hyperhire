export const BoxInfo = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="flex-col gap-2 border-t border-solid border-white pt-2 lg:flex">
      <p className="text-lg font-black text-white">{title}</p>
      <p className="text-lg font-black text-white text-opacity-80">{body}</p>
    </div>
  );
};
