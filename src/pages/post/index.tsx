import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import { CenterLayout, PageWrapper, PostCount, PostItem, SEO } from 'components';
import { PostPageDataType } from 'pages/post/type';

const PostPage = ({
  data: {
    allMdx: { edges: postEdges, totalCount },
  },
}: PageProps<PostPageDataType>) => {
  return (
    <CenterLayout>
      <PageWrapper>
        <PostCount count={totalCount} />
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

export default PostPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
    <meta name="description" content="Victor Log의 게시글 목록을 확인할 수 있는 페이지입니다." />
    <title>Victor Log | 게시글 목록</title>
  </SEO>
);

const PostContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`;
