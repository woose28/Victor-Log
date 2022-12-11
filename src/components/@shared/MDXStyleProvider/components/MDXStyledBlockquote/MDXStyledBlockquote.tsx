import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledBlockquote = styled.blockquote`
  ${({ theme }) => css`
    margin-bottom: 3px;
    padding: 2px 14px;

    border-left: 3px solid ${theme.color.tertiary};
  `}
`;

export default MDXStyledBlockquote;
