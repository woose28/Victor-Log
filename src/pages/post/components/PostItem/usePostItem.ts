import { useTheme } from '@emotion/react';

export const usePostItem = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
