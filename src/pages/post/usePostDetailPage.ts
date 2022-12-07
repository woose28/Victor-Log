import { useTheme } from '@emotion/react';

export const usePostDetailPage = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
