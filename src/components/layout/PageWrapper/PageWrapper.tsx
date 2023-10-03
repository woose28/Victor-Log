import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexBox } from 'components';
import { PropsWithChildren } from 'react';
import { DISPLAY } from 'styles/css';

type BodySidePanelProps = {
  alignment: 'left' | 'right';
};

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

const Header = styled(FlexBox)``;

const Body = styled(FlexBox)`
  position: relative;
`;

const BodyMain = styled(FlexBox)``;

const BodySidePanel = styled(FlexBox)<BodySidePanelProps>`
  ${({ alignment }) => css`
    position: absolute;
    width: fit-content;

    ${alignment === 'right'
      ? css`
          left: 100%;
        `
      : css`
          right: 100%;
        `}

    @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
      display: none;
    }
  `}
`;

PageWrapper.Header = Header;
PageWrapper.Body = Body;
PageWrapper.BodyMain = BodyMain;
PageWrapper.BodySidePanel = BodySidePanel;

export default PageWrapper;
