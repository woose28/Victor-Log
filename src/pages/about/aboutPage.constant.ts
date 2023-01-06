import { Skill, TechExperience, Project, Education } from 'pages/about/aboutPage.type';
import { theme } from 'styles/theme';

const UNDERLINE_FONT_SIZE_LARGE_DEFAULT = 32;
const UNDERLINE_FONT_SIZE_LARGE_TABLET_HORIZONTAL_MAX = 24;
const UNDERLINE_FONT_SIZE_SMALL_DEFAULT = 20;
const UNDERLINE_FONT_SIZE_SMALL_TABLET_HORIZONTAL_MAX = 12;

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

const PROJECTS: Project[] = [
  {
    name: 'VICTOR LOG',
    date: {
      start: '2022.08',
    },
    description: '직접 만들어 가는 블로그 및 포트폴리오 페이지',
    skills: ['React', 'Typescript', 'Emotion', 'Gatsby', 'GraphQL', 'Storybook'],
    experiences: ['SSG 렌더링 방식의 정적 사이트개발', 'Storybook을 활용한 CDD 개발'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/woose28/Victor-Log',
      },
      {
        type: 'website',
        url: 'https://victor-log.vercel.app/post/',
      },
    ],
    image: '/images/project_image_victor_log.png',
    projectColor: theme.color.primary,
  },
  {
    name: 'SMODY',
    date: {
      start: '2022.06',
      end: '2022.10',
    },
    description: '3일간의 짧은 주기의 챌린지로 장기적인 습관 형성을 도와주는 챌린지 웹 서비스',
    skills: [
      'React',
      'Typescript',
      'React Query',
      'Recoil',
      'Styled Components',
      'Webpack',
      'Storybook',
      'Jest',
      'PWA',
    ],
    experiences: [
      'Webpack을 이용하여 프로젝트 환경 직접 구축',
      'Storybook을 활용한 CDD 개발',
      '자주 사용되는 맵드 타입 NPM에 출시',
      '코드 난독화 및 스플리팅을 통한 Javascript 리소스 최적화',
      'HTTP와 브라우저에 대한 학습 후 최적화 적용',
      'Jest와 React Testing Library를 이용한 컴포넌트 렌덜이 테스트 수행',
      'Github Actions를 통한 테스트 자동화 구축',
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/woowacourse-teams/2022-smody',
      },
      {
        type: 'website',
        url: 'https://www.smody.co.kr/home',
      },
      {
        type: 'information',
        url: 'https://sites.google.com/woowahan.com/woowacourse-demo-4th/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%8A%A4%EB%AA%A8%EB%94%94',
      },
    ],
    image: '/images/project_image_smody.png',
    projectColor: theme.color.projectColorSmody,
  },
  {
    name: 'ATSAY',
    date: {
      start: '2020.12',
      end: '2021.12',
    },
    description: '웹소설을 좋아하는 사람들이 소통하고 작품을 리뷰하는 웹소설 커뮤니티 앱',
    skills: ['React Native', 'Javascript', 'Mobx'],
    experiences: [
      'React Native를 이용한 Cross Platform 앱 서비스 개발',
      'Mobx를 이용한 상태 관리',
      '서비스 사용된 애니메이션 효과를 직접 구현',
      'Object-C, Java 등의 코드로 Third party Library에 추가 기능 구현',
    ],
    links: [
      {
        type: 'download',
        url: 'https://apps.apple.com/kr/app/atsay-%EC%97%A3%EC%84%B8%EC%9D%B4/id1558659036',
      },
      {
        type: 'information',
        url: 'https://picturesque-detective-8b5.notion.site/ATSAY-4005e4bc86744f9999a155620aaec710',
      },
    ],
    image: '/images/project_image_atsay.png',
    projectColor: theme.color.projectColorAtsay,
  },
  {
    name: '동국대알리미',
    date: {
      start: '2019.06',
      end: '2020.09',
    },
    description: '파편화된 교내 정보들을 수집해서 카카오톡 플러스 친구로 제공하는 챗봇 서비스',
    skills: ['Python', 'Flask', 'Requests', 'Beautiful Soup', 'Mysql'],
    experiences: [
      'Flask를 이용하여 웹 서버 및 API 구현',
      'Requests와 Beautiful Soup를 활용한 웹 스크래핑 기능 구현',
      'Mysql을 활용한 데이터베이스 구축',
    ],
    links: [
      {
        type: 'website',
        url: 'https://pf.kakao.com/_FmExbT',
      },
      {
        type: 'information',
        url: 'https://picturesque-detective-8b5.notion.site/169b93a353c4432da9118c2613cb20da',
      },
    ],
    image: '/images/project_image_dongguk_alrimi.png',
    projectColor: theme.color.projectColorDonggukAlrimi,
  },
];

const EDUCATION: Education[] = [
  {
    name: '우아한테크코스 - 웹 프론트엔드 과정',
    date: {
      start: '2022.02',
      end: '2022.11',
    },
    description: '우아한형제들에서 진행하는 개발자 양성 교육 과정',
    information: [
      '프론트엔드 개발자로서 현업에 필요한 역량에 대한 학습 진행',
      '코드 리뷰 시스템을 통해 리뷰어 역할 경험',
      '소프트 스킬을 위한 긴밀한 협업과 기술 발표 과정을 수행',
    ],
  },
  {
    name: '동국대학교',
    date: {
      start: '2016.03',
      end: '2022.02',
    },
    information: [
      '주전공: 공과 대학 산업시스템',
      '부전공: 융합소프트웨어 연계전공',
      'GPA: 4.0/4.5, 우등 졸업생',
      '성적 우수 장학 3회, 소프트웨어 연계전공 우수 장학 2회, 동국 장학회 장학 1회 ',
      '교내 소프트웨어 페스티벌 대상\n동국대학교 창의문제해결 프로젝트 은상\n제 16회 한국 대학생 산업공학 프로젝트 경진대회 장려상',
    ],
  },
];
export {
  UNDERLINE_FONT_SIZE_LARGE_DEFAULT,
  UNDERLINE_FONT_SIZE_LARGE_TABLET_HORIZONTAL_MAX,
  UNDERLINE_FONT_SIZE_SMALL_DEFAULT,
  UNDERLINE_FONT_SIZE_SMALL_TABLET_HORIZONTAL_MAX,
  SKILLS,
  TECH_EXPERIENCES,
  PROJECTS,
  EDUCATION,
};
