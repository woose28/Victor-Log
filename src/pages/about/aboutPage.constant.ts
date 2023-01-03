import { Skill, TechExperience } from 'pages/about/aboutPage.type';

const SKILL_NAME_FONT_SIZE_DEFAULT = 32;
const SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX = 24;
const TECH_EXPERIENCE_SKILL_NAME_FONT_SIZE_DEFAULT = 20;
const TECH_EXPERIENCE_SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX = 12;

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

const TECH_EXPERIENCES: TechExperience[] = [
  {
    name: '빌드 환경 구축',
    skills: ['Webpack'],
    description: [
      '프로젝트 빌드 환경을 직접 구축할 수 있습니다.',
      '모듈 번들러는 Webpack을 이용했습니다. 프로젝트에 필요한 Webpack의 로더 및 플러그인 설정을 직접 수행할 수 있습니다.',
    ],
  },
  {
    name: '디자인 시스템',
    skills: ['Storybook'],
    description: [
      '컴포넌트 단위로 개발을 진행합니다.',
      'Figma로 디자인을 진행하고 Storybook 디자인 시스템을 구축한 경험이 있습니다.',
    ],
  },
  {
    name: 'API Mocking',
    skills: ['MSW'],
    description: [
      'MSW(Mock Service Worker) 라이브러리로 API Mocking을 한 경험이 있습니다.',
      'Service Worker에 대한 개념을 이해하고 있습니다.',
    ],
  },
  {
    name: '테스트',
    skills: ['Jest', 'React Testing Library'],
    description: [
      'Jest와 RTL(React Testing Library)를 이용해서 테스트 코드를 적용한 경험이 있습니다.',
      '테스트 코드 또한 다른 팀원이 읽는 코드라고 생각합니다. 주로 테스트 코드를 Given/When/Then 패턴에 맞게 작성합니다.',
    ],
  },
  {
    name: 'CI',
    skills: ['Github Actions'],
    description: [
      'Github Actions를 이용해서 PR이 생성됐을 때, 자동으로 테스트를 수행하도록 구현한 경험이 있습니다.',
    ],
  },
  {
    name: '성능 최적화',
    description: [
      '페이징 기반 코드 스플릿팅, 코드 난독화를 통해 CSR 환경에서 Javascript 파일 크기를 최적화한 경험이 있습니다.',
      '이미지 크기 조절과 확장자 변경을 통해 이미지 파일의 크기를 최적화한 경험이 있습니다.',
      '이외에도 cache를 이용해서 리소스 요청 및 빌드 시간을 최적화한 경험 이 있습니다.',
    ],
  },
  {
    name: '웹 접근성 개선',
    description: [
      '적절한 태그의 사용과 Aria-* 속성을 활용해서 전맹 사용자분들의 경험을 향상하려 노력합니다. 직접 스크린 리더를 사용하며 모달 사용성을 개선한 경험이 있습니다.',
    ],
  },
];
export {
  SKILL_NAME_FONT_SIZE_DEFAULT,
  SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX,
  TECH_EXPERIENCE_SKILL_NAME_FONT_SIZE_DEFAULT,
  TECH_EXPERIENCE_SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX,
  SKILLS,
  TECH_EXPERIENCES,
};
