import { forwardRef } from 'react';
import type { PropsWithChildren } from 'react';
import type { FixedProps } from './Fixed.type';
import * as Styled from './Fixed.style';

const Fixed = forwardRef<HTMLDivElement, PropsWithChildren<FixedProps>>(
  ({ children, layer, customStyle }, ref) => {
    return (
      <Styled.Wrapper ref={ref} layer={layer} customStyle={customStyle}>
        {children}
      </Styled.Wrapper>
    );
  }
);

Fixed.displayName = 'Fixed';

export default Fixed;
