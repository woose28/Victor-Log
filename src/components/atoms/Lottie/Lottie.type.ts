import { SerializedStyles } from '@emotion/react';
import { AnimationConfigWithData } from 'lottie-web';
import { PickType } from 'types/utils';

type LottieProps = {
  animationData: PickType<AnimationConfigWithData, 'animationData'>;
  customStyle?: SerializedStyles;
};

type UseLottieProps = Pick<LottieProps, 'animationData'>;

export { LottieProps, UseLottieProps };
