import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

import { theme } from 'styles/theme';
import { style } from 'styles/global';
import { MDXStyleProvider } from 'components';

const App = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <MDXStyleProvider>{children}</MDXStyleProvider>
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  min-width: 375px;
  height: 100%;
`;
