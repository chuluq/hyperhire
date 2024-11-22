'use client';

import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/organisms/carousel';
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

  const isMiddleCard = (index: number) => {
    const startIndex = current % count;
    const middleIndex = (startIndex + Math.floor(cardsPerPage / 2)) % count;
    return index === middleIndex;
  };

  return (
    <Carousel setApi={setApi} className="w-full max-w-sm">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <CardAvatar
              className={cn({
                'z-10 scale-95 transform bg-blue-200': !isMiddleCard(index),
                'z-20 scale-105 transform bg-red-200': isMiddleCard(index),
              })}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
