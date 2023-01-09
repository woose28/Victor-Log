import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { Text } from 'components';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';
import { usePostItem } from 'pages/post/components/PostItem/usePostItem';
import { HeroImage, TagList } from 'pages/post/components';

const PostItem = ({
  title,
  date,
  slug,
  tags,
  hero_image,
  hero_image_alt,
  excerpt,
}: PostItemProps) => {
  const { theme } = usePostItem();

  return (
    <NavLink to={`/post/${slug}`}>
      <Wrapper>
        <HeroImage
          hero_image={hero_image}
          hero_image_alt={hero_image_alt}
          style={{
            width: '208px',
            borderRadius: '10px 0 0 10px',
          }}
        />
        <PostInfoWrapper>
          <Text as="p" color={theme.color.onSecondary} size={20} fontWeight={400}>
            {title}
          </Text>
          <Summary as="p" color={theme.color.onSecondary} size={16} fontWeight={300}>
            {excerpt}
          </Summary>
          <TagList
            tags={tags}
            style={{
              marginTop: '20px',
            }}
          />
          <Date color={theme.color.subText} size={12}>
            {date}
          </Date>
        </PostInfoWrapper>
      </Wrapper>
    </NavLink>
  );
};

export default PostItem;

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.color.secondary};
    border-radius: 10px 0 0 10px;
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 208px);
  padding: 20px 28px;
`;

const Summary = styled(Text)`
  width: 100%;
  max-height: 3rem;
  margin-top: 10px;
  overflow: hidden;
`;

const Date = styled(Text)`
  height: 1rem;
  margin-top: 5px;
  align-self: flex-end;
`;
