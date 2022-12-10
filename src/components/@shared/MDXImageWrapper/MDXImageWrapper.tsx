import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MDXImageWrapperProps } from 'components/@shared/MDXImageWrapper/MDXImageWrapper.type';

const MDXImageWrapper = ({ children, style, caption }: PropsWithChildren<MDXImageWrapperProps>) => {
  return (
    <Wrapper style={style}>
      {children}
      <ImageCaption>{caption}</ImageCaption>
    </Wrapper>
  );
};

export default MDXImageWrapper;

const Wrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

const ImageCaption = styled.figcaption`
  ${({ theme }) => css`
    margin: 5px 0;
    color: ${theme.color.subText};
    font-size: 0.8rem;
    text-align: center;
  `}
`;
