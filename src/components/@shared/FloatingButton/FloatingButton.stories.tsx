import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingButton from 'components/@shared/FloatingButton/FloatingButton';
import { FlexBox } from 'components';

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
    <ButtonInnerWrapper justifyContent="center" alignItems="center">
      버튼
    </ButtonInnerWrapper>
  </FloatingButton>
);

const ButtonInnerWrapper = styled(FlexBox)`
  ${({ theme }) => css`
    padding: 10px;
    background-color: ${theme.color.tertiary};
    border-radius: 50%;
    aspect-ratio: 1;

    text-align: center;
  `}
`;
