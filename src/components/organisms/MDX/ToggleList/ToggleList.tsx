import { PropsWithChildren } from 'react';
import { ToggleListProps } from './ToggleList.type';
import * as Styled from './ToggleList.style';

const ToggleList = ({ children, summary }: PropsWithChildren<ToggleListProps>) => {
  return (
    <details>
      <Styled.Summary>{summary}</Styled.Summary>
      <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
    </details>
  );
};

export default ToggleList;
