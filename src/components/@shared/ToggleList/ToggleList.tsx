import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ToggleListProps } from 'components/@shared/ToggleList/ToggleList.type';

const ToggleList = ({ children, summary }: PropsWithChildren<ToggleListProps>) => {
  return (
    <details>
      <Summary>{summary}</Summary>
      <ContentWrapper>{children}</ContentWrapper>
    </details>
  );
};

export default ToggleList;

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
