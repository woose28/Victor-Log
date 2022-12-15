import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

import { theme } from 'styles/theme';
import { style } from 'styles/global';
import { MainLayoutProps } from 'layouts/MainLayout/MainLayout.type';
import { Footer, Header, MDXStyleProvider } from 'components';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Header />
        <MDXStyleProvider>
          <main>{children}</main>
        </MDXStyleProvider>
        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  min-width: 375px;
  height: 100%;
`;
