import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledTr = styled.tr`
  ${({ theme }) => css`
    td:first-child {
      background-color: ${theme.color.tableCellBackground};
    }
  `}
`;

export default MDXStyledTr;
