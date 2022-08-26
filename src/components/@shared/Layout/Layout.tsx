import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from 'styles/theme';
import { LayoutProps } from 'components/@shared/Layout/Layout.type';
import { Footer, Header } from 'components';
import 'styles/reset.css';

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  min-width: 375px;
`;

const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 4rem - 8rem); // 100vh - [height of Header] - [height of Footer]
    padding: 4rem 3.125rem 8rem;
    background-color: ${theme.color.background};
  `}
`;
