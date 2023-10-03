import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CenterLayout, PageWrapper, PostCount, PostItem, SEO } from 'components';
import type { Posts, Tags } from 'models/post';
import { useTagPage } from './useTagPage';
import { TagListWithAll } from './components';

type TagPageDataType = {
  tags: Tags;
  posts: Posts;
  allPosts: Posts;
};

const TagPage = ({
  data: {
    tags: { group: tags },
    posts,
    allPosts,
  },
  location,
}: PageProps<TagPageDataType>) => {
  const { tagParam, postEdges, tagPostCount } = useTagPage({
    posts,
    allPosts,
    location,
  });

  return (
    <CenterLayout>
      <PageWrapper>
        <PostCount count={tagPostCount} tag={tagParam} />
        <TagListWithAll
          css={css`
            margin: 30px 0 10px;
          `}
          totalCount={allPosts.totalCount}
          tags={tags}
          currentTag={tagParam}
        />
        <PostContainer>
          {postEdges.map((post) => (
            <li key={post.node.id}>
              <PostItem excerpt={post.node.excerpt} {...post.node.frontmatter} />
            </li>
          ))}
        </PostContainer>
      </PageWrapper>
    </CenterLayout>
  );
};

export default TagPage;

export const query = graphql`
  query ($tag: String) {
    tags: allMdx {
      group(field: frontmatter___tags) {
        name: fieldValue
        count: totalCount
      }
    }
    posts: allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
  }
`;

export const Head = () => (
  <SEO>
    <meta name="description" content="Victor Log의 태그 목록을 확인할 수 있는 페이지입니다." />
    <title>Victor Log | 태그 목록</title>
  </SEO>
);

const PostContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`;
