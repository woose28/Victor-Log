import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FullLayoutProps } from 'layouts/FullLayout/FullLayout.type';
import { DISPLAY } from 'styles/css';
import { Header, Footer } from 'components';

const FullLayout = ({
  children,
  headerBackgroundColor,
  mainBackgroundColor,
}: PropsWithChildren<FullLayoutProps>) => {
  return (
    <>
      <Header backgroundColor={headerBackgroundColor} />
      <Main style={{ backgroundColor: mainBackgroundColor }}>{children}</Main>
      <Footer />
    </>
  );
};

export default FullLayout;

const Main = styled.main`
  ${({ theme }) => css`
    height: fit-content;
    min-height: calc(100vh - 64px); // 100vh - [height of Header]
    padding: 64px 0 30px;
    background-color: ${theme.color.background};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 64px 20px 30px;
    }
  `}
`;
