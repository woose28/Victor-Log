import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Header, Footer, FlexBox } from 'components';
import { DISPLAY } from 'styles/css';
import { AvailableColor } from 'styles/type';

export type CenterLayoutProps = {
  headerBackgroundColor?: AvailableColor;
  mainBackgroundColor?: AvailableColor;
};

const CenterLayout = ({
  children,
  headerBackgroundColor,
  mainBackgroundColor,
}: PropsWithChildren<CenterLayoutProps>) => {
  return (
    <>
      <Header backgroundColor={headerBackgroundColor} />
      <Main
        as="main"
        justify="center"
        css={css`
          background-color: ${mainBackgroundColor};
        `}
      >
        {children}
      </Main>
      <Footer />
    </>
  );
};

const Main = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    height: fit-content;
    min-height: calc(100vh - 64px); // 100vh - [height of Header]
    padding: 64px 50px 30px;
    background-color: ${theme.color.background};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 64px 20px 30px;
    }
  `}
`;

export default CenterLayout;
