import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import { CenterLayout } from 'layouts';
import { Text } from 'components';
import { PostItem } from 'pages/post/components';
import { usePostPage } from 'pages/post/usePostPage';
import { PostPageDataType } from 'pages/post/type';
import { DISPLAY } from 'styles/css';

const PostPage = ({
  data: {
    allMdx: { edges: postEdges, totalCount },
  },
}: PageProps<PostPageDataType>) => {
  const { theme } = usePostPage();

  return (
    <CenterLayout>
      <PageWrapper>
        <TotalText color={theme.color.onBackground} size={16} fontWeight={700}>
          Total{' '}
          <Text color={theme.color.primary} size={16} fontWeight={700}>
            {totalCount}
          </Text>{' '}
          Post
        </TotalText>
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

export const Head = () => <title>Victor Log | 게시글 목록</title>;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${DISPLAY.TABLET_VERTICAL_MAX};

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    width: 100%;
  }
`;

const TotalText = styled(Text)`
  align-self: flex-start;
`;

const PostContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`;
