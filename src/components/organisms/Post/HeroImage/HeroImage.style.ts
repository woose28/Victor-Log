import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PostHeroImage = styled(GatsbyImage)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.primary};
  `}
`;

const DefaultHeroImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.color.primary};
  `}
`;

export { PostHeroImage, DefaultHeroImage };
