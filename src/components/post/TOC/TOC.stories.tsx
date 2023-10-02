import TOC from './TOC';
import type { TOCProps } from './TOC';

export default {
  title: 'post/TOC',
  component: TOC,
};

export const DefaultTOC = ({ items }: TOCProps) => <TOC items={items} />;

DefaultTOC.args = {
  items: [
    {
      url: '#들어가며',
      title: '들어가며',
    },
    {
      url: '#windowing-기법이란',
      title: 'windowing 기법이란?',
      items: [
        {
          url: '#react-window와-react-virtualized',
          title: 'react-window와 react-virtualized',
        },
      ],
    },
    {
      url: '#windowing-기법-적용-전후-성능-비교',
      title: 'windowing 기법 적용 전후 성능 비교',
      items: [
        {
          url: '#성능-비교-환경과-조건',
          title: '성능 비교 환경과 조건',
        },
        {
          url: '#windowing-기법-적용-전후-비교',
          title: 'windowing 기법 적용 전후 비교',
        },
        {
          url: '#실제로-windowing-기법을-적용할-필요가-있는가',
          title: '실제로 windowing 기법을 적용할 필요가 있는가?',
        },
      ],
    },
    {
      url: '#windowing-기법-원리-with-react-window',
      title: 'windowing 기법 원리 with react-window',
    },
    {
      url: '#끝으로',
      title: '끝으로',
    },
    {
      url: '#참고-자료',
      title: '참고 자료',
    },
  ],
};
