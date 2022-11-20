import { Global, ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';
import { style } from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const argTypes = {
  theme: {
    table: {
      disable: true,
    },
  },
  as: {
    table: {
      disable: true,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
