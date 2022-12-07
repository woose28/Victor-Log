import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY } from 'styles/css';
import { FlexBox, Text } from 'components';
import { HeroImage, TagList } from 'pages/post/components';
import { usePostDetailPage } from 'pages/post/usePostDetailPage';

const PostDetailPage = ({ data, children }) => {
  const { title, date, tags, hero_image, hero_image_alt } = data.mdx.frontmatter;
  const { theme } = usePostDetailPage();

  return (
    <PageWrapper flexDirection="column" alignItems="center">
      <Text as="p" size={40} color={theme.color.onBackground} fontWeight="bold">
        {title}
      </Text>
      <Text as="p" color={theme.color.onBackground}>
        {date}
      </Text>
      <TagList
        tags={tags}
        style={{
          marginTop: '10px',
        }}
      />
      <HeroImage
        hero_image={hero_image}
        hero_image_alt={hero_image_alt}
        style={{
          width: '100%',
          aspectRatio: '1.618',
          marginTop: '35px',
        }}
      />
      <ContentWrapper>{children}</ContentWrapper>
      <Divider />
      <TagList
        tags={tags}
        style={{
          alignSelf: 'flex-start',
          marginTop: '25px',
        }}
      />
    </PageWrapper>
  );
};

export default PostDetailPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        tags
        hero_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
    }
  }
`;

export const Head = ({
  data: {
    mdx: { frontmatter },
  },
}) => <title>Victor Log | {frontmatter.title}</title>;

const PageWrapper = styled(FlexBox)`
  width: ${DISPLAY.TABLET_VERTICAL_MAX};

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 45px;

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    padding: 0;
  }
`;

const Divider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background-color: ${theme.color.tertiary};
  `}
`;
