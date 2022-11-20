import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import { FlexBox, Text } from 'components';
import { PostItem } from 'pages/post/components';
import { usePostPage } from 'pages/post/usePostPage';
import { PostPageDataType } from 'pages/post/type';
import { DISPLAY } from 'styles/css';

const PostPage = ({ data }: PageProps<PostPageDataType>) => {
  const { theme } = usePostPage();

  return (
    <FlexBox flexDirection="column" alignItems="center">
      <div>
        <Text color={theme.color.onBackground} size={16}>
          Total Post {4}
        </Text>
        <PostContainer>
          {data.allMdx.edges.map((post) => (
            <li key={post.node.id}>
              <PostItem {...post.node.frontmatter} />
            </li>
          ))}
        </PostContainer>
      </div>
    </FlexBox>
  );
};

export default PostPage;

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            tags
          }
          id
        }
      }
    }
  }
`;

export const Head = () => <title>Victor Log | 게시글 목록</title>;

const PostContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 266px);
  grid-gap: 20px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    grid-template-columns: repeat(2, 266px);
  }

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    grid-template-columns: repeat(1, 266px);
  }

  @media all and (max-width: ${'366px'}) {
    grid-template-columns: 100%;
  }
`;
