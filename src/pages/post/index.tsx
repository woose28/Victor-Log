import { graphql, PageProps } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  CenterLayout,
  PageWrapper,
  PostCount,
  PostItem,
  TagList,
  SEO,
  Text,
  FlexBox,
} from 'components';
import type { Posts, Tags } from 'models/post';

type PostPageDataType = {
  allPosts: Posts;
  tags: Tags;
};

const PostPage = ({
  data: {
    allPosts: { edges: postEdges, totalCount },
    tags: { group: tags },
  },
}: PageProps<PostPageDataType>) => {
  return (
    <CenterLayout>
      <PageWrapper>
        <PageWrapper.Header
          css={css`
            align-self: flex-start;
          `}
        >
          <PostCount count={totalCount} />
        </PageWrapper.Header>
        <PageWrapper.Body
          css={css`
            margin-top: 20px;
          `}
        >
          <PostContainer>
            {postEdges.map((post) => (
              <li key={post.node.id}>
                <PostItem excerpt={post.node.excerpt} {...post.node.frontmatter} />
              </li>
            ))}
          </PostContainer>
          <PageWrapper.BodySidePanel
            alignment="right"
            css={css`
              margin-left: 20px;
            `}
          >
            <TagWrapper direction="column" gap={20}>
              <Text as="span" fontWeight={700}>
                All Tags
              </Text>
              <TagList tags={tags} variant="primary" />
            </TagWrapper>
          </PageWrapper.BodySidePanel>
          <PageWrapper.BodyMain></PageWrapper.BodyMain>
        </PageWrapper.Body>
      </PageWrapper>
    </CenterLayout>
  );
};

export default PostPage;

export const query = graphql`
  query {
    allPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            tags
            hero_image {
              childrenImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
          }
          id
          excerpt
        }
      }
      totalCount
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`;

export const Head = () => (
  <SEO>
    <meta name="description" content="Victor Log의 게시글 목록을 확인할 수 있는 페이지입니다." />
    <title>Victor Log | 게시글 목록</title>
  </SEO>
);

const PostContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const TagWrapper = styled(FlexBox)`
  width: fit-content;
  width: 200px;
`;
