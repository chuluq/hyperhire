import Image from 'next/image';

import logo from '@/assets/logo-white.png';

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image src={logo} alt="logo-white" priority={true} />
    </div>
  );
};
