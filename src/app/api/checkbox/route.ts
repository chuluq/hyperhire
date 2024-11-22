import { type NextApiRequest } from 'next';

const boxInfo: { id: number; text: string }[] = [
  {
    id: 0,
    text: '한국어 능력',
  },
  {
    id: 1,
    text: '업무 수행 능력',
  },
  {
    id: 2,
    text: '겸업 여부',
  },
  {
    id: 3,
    text: '평판 조회',
  },
];

export function GET(req: NextApiRequest) {
  return Response.json(boxInfo);
}
