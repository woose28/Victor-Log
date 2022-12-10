import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MDXImageWrapperProps } from 'components/@shared/MDXImageWrapper/MDXImageWrapper.type';

const MDXImageWrapper = ({ children, style, caption }: PropsWithChildren<MDXImageWrapperProps>) => {
  return (
    <Wrapper style={style}>
      <ImageWrapper>{children}</ImageWrapper>
      <ImageCaption>{caption}</ImageCaption>
    </Wrapper>
  );
};

export default MDXImageWrapper;

const Wrapper = styled.div`
  max-width: 450px;
  margin: 5px auto;
`;

const ImageWrapper = styled.div`
  ${({ theme }) => css`
    border: solid 1.5px ${theme.color.mdxImageWrapperBorder};
    border-radius: 5px;
    overflow: hidden;

    p {
      padding: 0;
    }
  `}
`;

const ImageCaption = styled.figcaption`
  ${({ theme }) => css`
    margin: 5px 0;
    color: ${theme.color.subText};
    font-size: 0.8rem;
    text-align: center;
  `}
`;
