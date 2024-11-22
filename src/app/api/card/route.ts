import { type NextApiRequest } from 'next';
import { type CardData } from '@/lib/types';

import code from '@/assets/icon-code.png';
import user from '@/assets/icon-user.png';
import kor from '@/assets/icon-kor.png';
import setting from '@/assets/icon-setting.png';

const cardData: CardData[] = [
  {
    id: 0,
    iconUrl: code,
    text: '해외 개발자 원격 채용',
  },
  {
    id: 1,
    iconUrl: user,
    text: '외국인 원격 채용 (비개발)',
  },
  {
    id: 2,
    iconUrl: kor,
    text: '한국어 가능 외국인 채용',
  },
  {
    id: 0,
    iconUrl: setting,
    text: '해외 개발자 활용 서비스',
  },
];

export function GET(req: NextApiRequest) {
  return Response.json(cardData);
}
