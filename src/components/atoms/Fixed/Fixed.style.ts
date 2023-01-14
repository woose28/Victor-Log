import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { WrapperProps } from './Fixed.type';

const Wrapper = styled.div<WrapperProps>`
  ${({ layer, customStyle }) => [
    customStyle,
    css`
      position: fixed;
      z-index: ${layer};
    `,
  ]}
`;

export { Wrapper };
