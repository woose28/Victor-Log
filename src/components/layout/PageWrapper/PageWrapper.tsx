import styled from '@emotion/styled';
import { FlexBox } from 'components';
import { PropsWithChildren } from 'react';
import { DISPLAY } from 'styles/css';

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper direction="column" align="center">
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  width: ${DISPLAY.TABLET_VERTICAL_MAX};

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    width: 100%;
  }
`;

export default PageWrapper;
