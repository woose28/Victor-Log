import { Skill } from 'pages/about/aboutPage.type';

const SKILL_NAME_FONT_SIZE_DEFAULT = 32;
const SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX = 24;

const SKILLS: Skill[] = [
  {
    name: 'HTML/CSS',
    description: [
      '웹 표준을 중요하게 생각합니다. 또한 Semantic Markup을 하려고 노력합니다.',
      'CSS-in-JS 방식에 익숙합니다. Styled-Components와 Emotion을 이용해서 스타일링을 진행합니다.',
    ],
  },
  {
    name: 'Javascript',
    description: [
      'ES2015 이후의 Javascript 문법에 익숙합니다.',
      'Javascript PS 문제 풀이를 진행하고 있습니다. 간결하고 빠른 속도의 코드를 작성하는 방법을 고민하고 적용합니다.',
    ],
  },
  {
    name: 'React',
    description: [
      'React Hooks를 잘 활용합니다. UI 코드와 비즈니스 코드의 분리를 위해 Custom Hook을  적극 이용합니다.',
      '상태 관리 방법으로 Redux, Recoil 이용한 경험이 있습니다. 클라이언트 상태와 서버 상태를 분리하기 위해 react-query를 사용한 경험이 있습니다.',
    ],
  },
  {
    name: 'Typescript',
    description: [
      '타입간의 관계를 잘 이해하고 있습니다. 좁은 타입을 유지하기 위해 노력합니다.',
      '프로젝트에 사용되는 도메인 타입의 구조를 설계하는 것을 좋아합니다.',
      '프로젝트에서 자주 사용되는 맵드 타입(타입을 위한 타입)을 분리하여 NPM 패키지를 출시한 경험이 있습니다.',
    ],
  },
];

export { SKILLS, SKILL_NAME_FONT_SIZE_DEFAULT, SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX };
