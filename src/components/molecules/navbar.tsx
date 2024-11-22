import Image from 'next/image';
import { Menu } from 'lucide-react';

import { Button } from '@/components/atoms/button';

import logo from '@/assets/logo-white.png';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src={logo} alt="logo-white" priority={true} />
      <Button size="icon">
        <Menu color="white" />
      </Button>
    </div>
  );
};
