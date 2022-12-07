import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { FlexBox, Text } from 'components';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';
import { usePostItem } from 'pages/post/components/PostItem/usePostItem';
import { HeroImage, TagList } from 'pages/post/components';

const PostItem = ({ title, date, slug, tags, hero_image, hero_image_alt }: PostItemProps) => {
  const { theme } = usePostItem();

  return (
    <Wrapper flexDirection="column">
      <NavLink to={`/post/${slug}`}>
        <HeroImage
          hero_image={hero_image}
          hero_image_alt={hero_image_alt}
          style={{
            width: '100%',
            height: '200px',
            borderRadius: '10px 10px 0 0',
          }}
        />
        <PostInfoWrapper flexDirection="column" gap="15px">
          <Text color={theme.color.onSecondary} size={16}>
            {title}
          </Text>
          <TagList tags={tags} />
          <Date color={theme.color.subText} size={12}>
            {date}
          </Date>
        </PostInfoWrapper>
      </NavLink>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled(FlexBox)`
  ${({ theme }) => css`
    width: 266px;
    border-radius: 0.625rem 0.625rem 0 0;
    background-color: ${theme.color.secondary};
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const PostInfoWrapper = styled(FlexBox)`
  height: 100%;
  padding: 15px;
`;

const Date = styled(Text)`
  margin-top: auto;
  align-self: flex-end;
`;
