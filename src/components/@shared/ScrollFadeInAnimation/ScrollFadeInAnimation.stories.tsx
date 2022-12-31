import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ScrollFadeInAnimation from 'components/@shared/ScrollFadeInAnimation/ScrollFadeInAnimation';
import { FlexBox, Text } from 'components';

export default {
  title: '@shared/ScrollFadeInAnimation',
  component: ScrollFadeInAnimation,
};

export const DefaultScrollFadeInAnimation = () => {
  const theme = useTheme();

  return (
    <Wrapper flexDirection="column" justifyContent="space-between">
      <Text color={theme.color.onBackground} size={16}>
        {'아래로 스크롤 해주세요!\nfade-in 애니메이션 효과가 적용된 박스를 확인할 수 있습니다.'}
      </Text>
      <ScrollFadeInAnimation intersectionObserverOptions={{ threshold: 0.8 }}>
        <TestBox />
      </ScrollFadeInAnimation>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  height: 100vh;
  white-space: pre-line;
`;

const TestBox = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    background-color: ${theme.color.primary};
  `}
`;
