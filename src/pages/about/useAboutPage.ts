import { useTheme } from '@emotion/react';

export const useAboutPage = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
