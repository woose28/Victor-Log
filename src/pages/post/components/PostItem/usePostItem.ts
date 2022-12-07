import { useTheme } from '@emotion/react';
import { getImage } from 'gatsby-plugin-image';
import { UsePostItemProps } from 'pages/post/components/PostItem/PostItem.type';

export const usePostItem = ({ hero_image }: UsePostItemProps) => {
  const theme = useTheme();

  // 이미지를 하나만 조회해도 childrenImageSharp 배열 형태로 반환되기 때문에 0번째 요소에 접근해야 한다.
  const heroImageData = getImage(hero_image?.childrenImageSharp[0]);

  return {
    theme,
    heroImageData,
  };
};
