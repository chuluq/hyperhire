import { type NextApiRequest } from 'next';
import { type BoxInfoType } from '@/lib/types';

const boxInfo: BoxInfoType[] = [
  {
    id: 0,
    title: '평균 월 120만원',
    body: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    id: 1,
    title: '최대 3회 인력교체',
    body: '막상 채용해보니 맞지 않아도 걱정하지 마세요. ',
  },
  {
    id: 2,
    title: '평균 3일, 최대 10일',
    body: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

export function GET(req: NextApiRequest) {
  return Response.json(boxInfo);
}
