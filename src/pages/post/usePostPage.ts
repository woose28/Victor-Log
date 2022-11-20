import { useTheme } from '@emotion/react';
import { UsePostPageProps } from 'pages/post/type';

export const usePostPage = ({ postEdges }: UsePostPageProps) => {
  const theme = useTheme();

  const postCount = postEdges.length;

  return {
    theme,
    postCount,
  };
};
