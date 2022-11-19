import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import { theme } from 'styles/theme';
import { LayoutProps } from 'components/@shared/Layout/Layout.type';
import { Footer, Header } from 'components';
import { DISPLAY } from 'styles/css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;

const style = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  li {
    list-style: none;
  }
`;

const Wrapper = styled.div`
  min-width: 375px;
  height: 100%;
`;

const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 64px - 128px); // 100vh - [height of Header] - [height of Footer]
    padding: 64px 50px 128px;
    background-color: ${theme.color.background};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 64px 20px 128px;
    }
  `}
`;
