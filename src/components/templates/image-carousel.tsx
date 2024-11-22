'use client';

import React from 'react';

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/organisms/carousel';
import { CardAvatar } from '@/components/templates/card-avatar';

import { cn } from '@/lib/utils';

export const ImageCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const cardsPerPage = 3;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full max-w-sm">
      <CarouselContent className="-ml-1 flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 pl-1">
            <CardAvatar
              className={cn({
                'z-50 -translate-x-10 bg-white': ((current % count) + Math.floor(cardsPerPage / 2)) % count === index,
              })}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
