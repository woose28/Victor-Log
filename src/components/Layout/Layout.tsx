import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

import { theme } from 'styles/theme';
import { style } from 'styles/global';
import { LayoutProps } from 'components/Layout/Layout.type';
import { Footer, Header, MDXStyleProvider } from 'components';
import { DISPLAY } from 'styles/css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Header />
        <MDXStyleProvider>
          <Main>{children}</Main>
        </MDXStyleProvider>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  min-width: 375px;
  height: 100%;
`;

const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
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
