import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.type';

export default {
  title: 'post/HeroImage',
  component: HeroImage,
};

export const DefaultHeroImage = (args: HeroImageProps) => <HeroImage {...args} />;

DefaultHeroImage.args = {
  style: {
    width: '100%',
    height: '200px',
    borderRadius: '10px 10px 0 0',
  },
};
