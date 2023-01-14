import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MountFadeInAnimation from './MountFadeInAnimation';

export default {
  title: 'molecules/MountFadeInAnimation',
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
