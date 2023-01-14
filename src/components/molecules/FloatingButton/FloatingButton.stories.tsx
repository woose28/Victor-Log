import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingButton from './FloatingButton';

export default {
  title: 'molecules/FloatingButton',
  component: FloatingButton,
};

export const DefaultFloatingButton = () => (
  <FloatingButton
    layer={FLOATING_BUTTON_LAYER}
    wrapperCustomStyle={wrapperCustomStyle}
    buttonCustomStyle={buttonCustomStyle}
  >
    <ButtonInnerWrapper>버튼</ButtonInnerWrapper>
  </FloatingButton>
);

const wrapperCustomStyle = css`
  right: 50px;
  bottom: 50px;
`;

const buttonCustomStyle = css`
  background-color: transparent;
  transition: 0.5s;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

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

const FLOATING_BUTTON_LAYER = 50;
