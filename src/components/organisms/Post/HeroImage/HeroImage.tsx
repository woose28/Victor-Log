import React from 'react';
import { HeroImageProps } from './HeroImage.type';
import { useHeroImage } from './useHeroImage';
import * as Styled from './HeroImage.style';

const DEFAULT_HERO_IMAGE_ALT = '게시글 히어로 이미지';

const HeroImage = ({ hero_image, hero_image_alt, style }: HeroImageProps) => {
  const { heroImageData } = useHeroImage({ hero_image });

  return (
    <>
      {heroImageData ? (
        <Styled.PostHeroImage
          image={heroImageData}
          alt={hero_image_alt || DEFAULT_HERO_IMAGE_ALT}
          style={style}
        />
      ) : (
        <Styled.DefaultHeroImage style={style} />
      )}
    </>
  );
};

export default HeroImage;
