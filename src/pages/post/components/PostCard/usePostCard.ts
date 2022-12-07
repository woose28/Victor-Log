import { useTheme } from '@emotion/react';

export const usePostCard = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
