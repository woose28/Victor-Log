import { SerializedStyles } from '@emotion/react';
import { Property } from 'csstype';

type FadeInAnimationProps = {
  fadeInClassName?: string;
  transition?: Property.Transition;
  beforeOpacity?: Property.Opacity;
  beforeTransform?: Property.Transform;
  afterOpacity?: Property.Opacity;
  afterTransform?: Property.Transform;
  customStyle?: SerializedStyles;
};

type WrapperProps = FadeInAnimationProps;

export { FadeInAnimationProps, WrapperProps };
