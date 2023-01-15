import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Main = styled.main`
  ${({ theme }) => css`
    height: fit-content;
    min-height: calc(100vh - 64px); // 100vh - [height of Header]
    padding: 64px 0 30px;
    background-color: ${theme.color.background};
  `}
`;

export { Main };
