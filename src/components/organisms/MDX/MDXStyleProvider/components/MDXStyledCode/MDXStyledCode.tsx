import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledCode = styled.code`
  ${({ theme }) => css`
    padding: 0.2em 0.4em;
    background-color: ${theme.color.codeBackground};
    border-radius: 3px;
    color: ${theme.color.primary};
    font-size: 85%;
    font-weight: 600;
  `}
`;

export default MDXStyledCode;
