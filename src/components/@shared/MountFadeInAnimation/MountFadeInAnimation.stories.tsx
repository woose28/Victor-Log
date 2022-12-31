import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MountFadeInAnimation from 'components/@shared/MountFadeInAnimation/MountFadeInAnimation';

export default {
  title: '@shared/MountFadeInAnimation',
  component: MountFadeInAnimation,
};

export const DefaultMountFadeInAnimation = () => {
  return (
    <MountFadeInAnimation>
      <TestBox />
    </MountFadeInAnimation>
  );
};

const TestBox = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 100px;
    background-color: ${theme.color.primary};
  `}
`;
