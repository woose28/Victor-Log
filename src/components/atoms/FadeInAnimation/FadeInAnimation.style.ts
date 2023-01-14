import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { WrapperProps } from './FadeInAnimation.type';
import {
  DEFAULT_CLASS_NAME_FADE_IN,
  DEFAULT_TRANSITION,
  DEFAULT_BEFORE_OPACITY,
  DEFAULT_BEFORE_TRANSFORM,
  DEFAULT_AFTER_OPACITY,
  DEFAULT_AFTER_TRANSFORM,
} from './FadeInAnimation.constant';

const Wrapper = styled.div<WrapperProps>`
  ${({
    fadeInClassName,
    transition,
    beforeOpacity,
    beforeTransform,
    afterOpacity,
    afterTransform,
    customStyle,
  }) => [
    customStyle,
    css`
      transition: ${transition ?? DEFAULT_TRANSITION};
      opacity: ${beforeOpacity ?? DEFAULT_BEFORE_OPACITY};
      transform: ${beforeTransform ?? DEFAULT_BEFORE_TRANSFORM};

      &.${fadeInClassName ?? DEFAULT_CLASS_NAME_FADE_IN} {
        opacity: ${afterOpacity ?? DEFAULT_AFTER_OPACITY};
        transform: ${afterTransform ?? DEFAULT_AFTER_TRANSFORM};
      }
    `,
  ]}
`;

export { Wrapper };
