import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  margin-left: 10px;
`;

const Summary = styled.summary`
  ${({ theme }) => css`
    padding: 5px 0 5px 5px;
    cursor: pointer;

    &:hover {
      border-radius: 5px;
      background-color: ${theme.color.toggleListSummaryBackground};
    }

    &::marker {
      color: ${theme.color.primary};
    }
  `}
`;

export { ContentWrapper, Summary };
