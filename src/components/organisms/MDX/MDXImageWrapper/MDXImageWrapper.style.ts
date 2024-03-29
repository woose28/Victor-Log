import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

    span {
      max-width: none !important;
    }

    img {
      max-width: 100%;
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

export { Wrapper, ImageWrapper, ImageCaption };
