import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { HeroImageProps } from 'pages/post/components/HeroImage/HeroImage.type';
import { useHeroImage } from 'pages/post/components/HeroImage/useHeroImage';

const DEFAULT_HERO_IMAGE_ALT = '게시글 히어로 이미지';

const HeroImage = ({ hero_image, hero_image_alt, style }: HeroImageProps) => {
  const { heroImageData } = useHeroImage({ hero_image });

  return (
    <>
      {heroImageData ? (
        <PostHeroImage
          image={heroImageData}
          alt={hero_image_alt || DEFAULT_HERO_IMAGE_ALT}
          style={style}
        />
      ) : (
        <DefaultHeroImage style={style} />
      )}
    </>
  );
};

export default HeroImage;

const PostHeroImage = styled(GatsbyImage)`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.primary};
  `}
`;

const DefaultHeroImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.primary};
  `}
`;
