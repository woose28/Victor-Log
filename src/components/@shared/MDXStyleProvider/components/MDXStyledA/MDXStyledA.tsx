import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledA = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.color.primary};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      left: 25%;
      bottom: 0;
      width: 0;
      height: 1px;
    }

    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${theme.color.primary};
      transition: all 0.25s ease-out;
    }
  `}
`;

export default MDXStyledA;
