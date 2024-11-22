import React from 'react';
import Image from 'next/image';

import { Avatar, AvatarFallback } from '@/components/atoms/avatar';
import { CardTag } from '@/components/molecules/card-tag';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/molecules/new-card';

import avatar from '@/assets/avatar.png';
import { cn } from '@/lib/utils';

export const CardAvatar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card
      className={cn(
        'relative flex w-[234px] flex-col items-center justify-center space-y-4 rounded-xl bg-[#EDFCFF] px-4 py-9 drop-shadow',
        className,
      )}>
      <CardHeader className="p-0">
        <Avatar className="size-16 self-center">
          <Image src={avatar} alt="avatar" width={64} height={64} />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-4 text-center text-lg font-black text-[#24252F]">Abhishek Gupta</CardTitle>
        <CardDescription className="text-center text-sm font-black text-[#4A77FF]">마케팅 · 2y+</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-center gap-1 p-0">
        <CardTag text="마케팅 콘텐츠 제작" />
        <CardTag text="인스타그램 관리" />
        <CardTag text="트위터 관리" />
        <CardTag text="블로그 글 작성" />
      </CardContent>
    </Card>
  );
};
