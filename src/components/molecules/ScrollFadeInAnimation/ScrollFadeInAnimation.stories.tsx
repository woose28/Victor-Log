import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ScrollFadeInAnimation from './ScrollFadeInAnimation';

export default {
  title: 'molecules/ScrollFadeInAnimation',
  component: ScrollFadeInAnimation,
};

export const DefaultScrollFadeInAnimation = () => {
  return (
    <Wrapper>
      <ComponentDescription>
        {'아래로 스크롤 해주세요!\nfade-in 애니메이션 효과가 적용된 박스를 확인할 수 있습니다.'}
      </ComponentDescription>
      <ScrollFadeInAnimation intersectionObserverOptions={{ threshold: 1 }}>
        <TestBox />
      </ScrollFadeInAnimation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  white-space: pre-line;
`;

const ComponentDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.onBackground};
  `}
`;

const TestBox = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    background-color: ${theme.color.primary};
  `}
`;
