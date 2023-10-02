/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY, LAYER } from 'styles/css';
import {
  Utterances,
  HeroImage,
  TagList,
  CenterLayout,
  PageWrapper,
  SEO,
  FlexBox,
  Fixed,
} from 'components';
import TOC from 'components/post/TOC/TOC';

const PostDetailPage = (props) => {
  const { data, children } = props;
  const {
    frontmatter: { title, date, tags, hero_image, hero_image_alt },
    tableOfContents: { items },
  } = data.post;

  return (
    <CenterLayout>
      <PageWrapper>
        <PageHeader direction="column" align="center">
          <PostTitleText>{title}</PostTitleText>
          <PostDateText>{date}</PostDateText>
          <TagList
            tags={tags}
            css={css`
              margin-top: 10px;
            `}
          />
        </PageHeader>
        <PageBody>
          <BodyMain direction="column" align="center">
            <HeroImage
              hero_image={hero_image}
              hero_image_alt={hero_image_alt}
              style={{
                width: '100%',
                aspectRatio: '1.618',
              }}
            />
            <ContentWrapper>{children}</ContentWrapper>
            <Divider />
            <TagList
              tags={tags}
              css={css`
                align-self: flex-start;
                margin-top: 25px;
              `}
            />
          </BodyMain>
          <BodyRight>
            {/* <TOC items={items} /> */}
            <Fixed layer={LAYER.TOC}>
              <TOC items={items} />
            </Fixed>
          </BodyRight>
        </PageBody>
        <Utterances
          customStyle={css`
            margin-top: 25px;
          `}
        />
      </PageWrapper>
    </CenterLayout>
  );
};

export default PostDetailPage;

export const query = graphql`
  query ($id: String) {
    post: mdx(id: { eq: $id }) {
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
      tableOfContents
    }
  }
`;

export const Head = ({ data }) => {
  const { title, date, tags } = data.post.frontmatter;

  return (
    <SEO>
      <meta
        name="description"
        content={`author: victor, date: ${date}, category: ${tags.join(', ')}`}
      />
      <title>Victor Log | {title}</title>
    </SEO>
  );
};

const PageHeader = styled(FlexBox)``;

const PageBody = styled(FlexBox)`
  position: relative;
  margin-top: 35px;
`;

const BodyMain = styled(FlexBox)``;

const BodyRight = styled.div`
  position: absolute;
  right: -20px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    display: none;
  }
`;

const PostTitleText = styled.p`
  ${({ theme }) => css`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${theme.color.onBackground};
  `}
`;

const PostDateText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.onBackground};
  `}
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
