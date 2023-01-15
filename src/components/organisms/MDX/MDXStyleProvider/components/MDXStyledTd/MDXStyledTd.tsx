import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledTd = styled.td`
  ${({ theme }) => css`
    padding: 7px 9px;
    border: 0.5px solid ${theme.color.tableBorder};
    text-align: center;
  `}
`;

export default MDXStyledTd;
