import styled from '@emotion/styled';
import { css } from '@emotion/react';

const MDXStyledTh = styled.th`
  ${({ theme }) => css`
    padding: 7px 9px;
    background-color: ${theme.color.tableCellBackground};
    border: 0.5px solid ${theme.color.tableBorder};
    font-weight: 600;
  `}
`;

export default MDXStyledTh;
