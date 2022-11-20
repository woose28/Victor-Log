import { useTheme } from '@emotion/react';

export const usePostPage = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
