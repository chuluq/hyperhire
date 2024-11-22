import { type CardData } from '@/lib/types';

import marketing from '@/assets/icon-marketing.png';
import image from '@/assets/icon-image.png';
import box from '@/assets/icon-box.png';
import target from '@/assets/icon-target.png';
import call from '@/assets/icon-call.png';

const textIconData: CardData[] = [
  {
    id: 0,
    iconUrl: marketing,
    text: '상호명',
  },
  {
    id: 1,
    iconUrl: image,
    text: '퍼블리셔',
  },
  {
    id: 2,
    iconUrl: box,
    text: '캐드원(제도사)',
  },
  {
    id: 3,
    iconUrl: target,
    text: '해외 세일즈',
  },
  {
    id: 4,
    iconUrl: call,
    text: '해외 CS',
  },
];

export function GET() {
  return Response.json(textIconData);
}
