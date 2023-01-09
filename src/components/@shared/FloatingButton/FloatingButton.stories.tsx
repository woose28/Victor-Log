import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingButton from 'components/@shared/FloatingButton/FloatingButton';

export default {
  title: '@shared/FloatingButton',
  component: FloatingButton,
};

export const DefaultFloatingButton = () => (
  <FloatingButton
    customStyle={css`
      opacity: 0.6;
    `}
  >
    <ButtonInnerWrapper>버튼</ButtonInnerWrapper>
  </FloatingButton>
);

const ButtonInnerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${theme.color.tertiary};
    border-radius: 50%;
    aspect-ratio: 1;

    text-align: center;
  `}
`;
