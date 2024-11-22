import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/atoms/button';

import logo from '@/assets/logo-white.png';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src={logo} alt="logo-white" priority={true} />
      <div className="hidden items-center gap-x-[60px] lg:flex">
        <Link href="#" className="font-black text-white">
          채용
        </Link>
        <Link href="#" className="font-black text-white">
          해외 개발자 활용 서비스
        </Link>
      </div>
      <Button className="hidden gap-[10px] rounded-lg bg-white px-6 py-[6px] font-black text-[#4A77FF] lg:flex">
        문의하기
      </Button>
      <Button size="icon" className="lg:hidden">
        <Menu color="white" />
      </Button>
    </div>
  );
};
