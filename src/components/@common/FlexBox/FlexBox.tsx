import { forwardRef } from 'react';
import type { PropsWithChildren, CSSProperties, ElementType, HtmlHTMLAttributes } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type FlexBoxProps = {
  as?: ElementType;
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  customStyle?: SerializedStyles;
  gap?: CSSProperties['gap'];
} & HtmlHTMLAttributes<HTMLDivElement>;

type WrapperProps = Pick<FlexBoxProps, 'direction' | 'align' | 'justify' | 'gap'> &
  HtmlHTMLAttributes<HTMLDivElement>;

const FlexBox = forwardRef<HTMLDivElement, PropsWithChildren<FlexBoxProps>>(
  (
    {
      children,
      as,
      customStyle,
      direction = 'row',
      align = 'flex-start',
      justify = 'flex-start',
      gap,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper
        as={as}
        ref={ref}
        css={customStyle}
        direction={direction}
        align={align}
        justify={justify}
        gap={gap}
        {...props}
      >
        {children}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div<WrapperProps>`
  ${({ direction, align, justify, gap }) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    gap: ${gap}px;
  `}
`;

FlexBox.displayName = 'FlexBox';

export default FlexBox;
