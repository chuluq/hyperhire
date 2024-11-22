import { type FooterData } from '@/lib/types';

const footerData: FooterData[] = [
  {
    id: 0,
    title: '상호명',
    body: '하이퍼하이어',
    footer: 'Hyperhire India Private Limited',
  },
  {
    id: 1,
    title: '대표 CEO',
    body: '김주현',
    footer: 'Juhyun Kim',
  },
  {
    id: 2,
    title: '사업자등록번호 CIN',
    body: '427-86-01187',
    footer: 'U74110DL2016PTC290812',
  },
  {
    id: 3,
    title: '주소 ADDRESS',
    body: '서울특별시 강남대로 479, 지하 1층 238호',
    footer: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
  },
];

export function GET() {
  return Response.json(footerData);
}
