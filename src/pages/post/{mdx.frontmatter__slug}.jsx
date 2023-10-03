/* eslint-disable react/prop-types */
import React from 'react';
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
  Fixed,
  TOC,
} from 'components';

const PostDetailPage = (props) => {
  const { data, children } = props;
  const {
    frontmatter: { title, date, tags, hero_image, hero_image_alt },
    tableOfContents: { items },
  } = data.post;

  return (
    <CenterLayout>
      <PageWrapper>
        <PageWrapper.Header direction="column" align="center">
          <PostTitleText>{title}</PostTitleText>
          <PostDateText>{date}</PostDateText>
          <TagList
            tags={tags}
            css={css`
              margin-top: 10px;
            `}
          />
        </PageWrapper.Header>
        <PageWrapper.Body
          direction="column"
          align="center"
          css={css`
            margin-top: 35px;
          `}
        >
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
          <PageWrapper.BodySidePanel
            alignment="right"
            css={css`
              margin-left: 20px;
            `}
          >
            <Fixed layer={LAYER.BODY_SIDE_PANEL}>
              <TOC items={items} />
            </Fixed>
          </PageWrapper.BodySidePanel>
        </PageWrapper.Body>
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
