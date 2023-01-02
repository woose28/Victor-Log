import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FloatingScrollButton from 'components/@shared/FloatingScrollButton/FloatingScrollButton';
import { FlexBox } from 'components';

export default {
  title: '@shared/FloatingScrollButton',
  component: FloatingScrollButton,
};

export const DefaultFloatingScrollButton = () => (
  <Wrapper>
    <FloatingScrollButton />
  </Wrapper>
);

const Wrapper = styled(FlexBox)`
  ${({ theme }) => css`
    height: 400vh;
  `}
`;
