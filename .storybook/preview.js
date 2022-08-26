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
