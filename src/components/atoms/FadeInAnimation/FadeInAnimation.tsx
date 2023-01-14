import { forwardRef, PropsWithChildren } from 'react';
import { FadeInAnimationProps } from './FadeInAnimation.type';
import * as Styled from './FadeInAnimation.style';

const FadeInAnimation = forwardRef<HTMLDivElement, PropsWithChildren<FadeInAnimationProps>>(
  (
    {
      children,
      fadeInClassName,
      transition,
      beforeOpacity,
      beforeTransform,
      afterOpacity,
      afterTransform,
      customStyle,
    },
    ref
  ) => {
    return (
      <Styled.Wrapper
        ref={ref}
        fadeInClassName={fadeInClassName}
        transition={transition}
        beforeOpacity={beforeOpacity}
        beforeTransform={beforeTransform}
        afterOpacity={afterOpacity}
        afterTransform={afterTransform}
        customStyle={customStyle}
      >
        {children}
      </Styled.Wrapper>
    );
  }
);

FadeInAnimation.displayName = 'FadeInAnimation';

export default FadeInAnimation;
