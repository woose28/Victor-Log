import { PropsWithChildren } from 'react';
import { MDXImageWrapperProps } from './MDXImageWrapper.type';
import * as Styled from './MDXImageWrapper.style';

const MDXImageWrapper = ({ children, style, caption }: PropsWithChildren<MDXImageWrapperProps>) => {
  return (
    <Styled.Wrapper style={style}>
      <Styled.ImageWrapper>{children}</Styled.ImageWrapper>
      <Styled.ImageCaption>{caption}</Styled.ImageCaption>
    </Styled.Wrapper>
  );
};

export default MDXImageWrapper;
