import { getImage } from 'gatsby-plugin-image';
import { UseHeroImageProps } from 'pages/post/components/HeroImage/HeroImage.type';

export const useHeroImage = ({ hero_image }: UseHeroImageProps) => {
  // 이미지를 하나만 조회해도 childrenImageSharp 배열 형태로 반환되기 때문에 0번째 요소에 접근해야 한다.
  const heroImageData = hero_image && getImage(hero_image.childrenImageSharp[0]);

  return {
    heroImageData,
  };
};
