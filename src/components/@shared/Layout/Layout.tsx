import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

import { theme } from 'styles/theme';
import { style } from 'styles/global';
import { LayoutProps } from 'components/@shared/Layout/Layout.type';
import { Footer, Header, MarkdownStyleProvider } from 'components';
import { DISPLAY } from 'styles/css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Header />
        <MarkdownStyleProvider>
          <Main>{children}</Main>
        </MarkdownStyleProvider>
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
    width: 100%;
    height: fit-content;
    min-height: calc(100vh - 64px - 128px); // 100vh - [height of Header] - [height of Footer]
    padding: 64px 50px 128px;
    background-color: ${theme.color.background};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 64px 20px 128px;
    }
  `}
`;
