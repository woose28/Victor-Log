import { useTheme } from '@emotion/react';

export const useTagList = () => {
  const theme = useTheme();

  return {
    theme,
  };
};
