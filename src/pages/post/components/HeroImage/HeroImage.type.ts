import { CSSProperties } from 'react';
import { PostFrontMatter } from 'models/post';

export type HeroImageProps = Partial<Pick<PostFrontMatter, 'hero_image' | 'hero_image_alt'>> & {
  style: CSSProperties;
};

export type UseHeroImageProps = Pick<HeroImageProps, 'hero_image'>;
