import { SerializedStyles } from '@emotion/react';
import { AnimationConfigWithData } from 'lottie-web';
import { PickType } from 'types/utils';

type LottieProps = {
  animationData: PickType<AnimationConfigWithData, 'animationData'>;
  customStyle?: SerializedStyles;
};

export { LottieProps };
