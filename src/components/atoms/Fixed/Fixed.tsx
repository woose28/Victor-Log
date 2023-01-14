import { PropsWithChildren } from 'react';
import { FixedProps } from './Fixed.type';
import * as Styled from './Fixed.style';

const Fixed = ({ children, layer, customStyle }: PropsWithChildren<FixedProps>) => {
  return (
    <Styled.Wrapper layer={layer} customStyle={customStyle}>
      {children}
    </Styled.Wrapper>
  );
};

export default Fixed;
