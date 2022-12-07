import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FlexBox, Text } from 'components';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';
import { usePostItem } from 'pages/post/components/PostItem/usePostItem';
import { TagList } from 'pages/post/components';

const PostItem = ({ title, date, slug, tags, hero_image, hero_image_alt }: PostItemProps) => {
  const { theme, heroImageData } = usePostItem({ hero_image });

  return (
    <Wrapper flexDirection="column">
      <NavLink to={`/post/${slug}`}>
        {heroImageData ? (
          <HeroImage image={heroImageData} alt={hero_image_alt} />
        ) : (
          <DefaultHeroImage />
        )}
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

const HeroImage = styled(GatsbyImage)`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.primary};
  `}
`;

const DefaultHeroImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    background-color: ${theme.color.primary};
  `}
`;

const PostInfoWrapper = styled(FlexBox)`
  height: 100%;
  padding: 15px;
`;

const TagItem = styled(Text)`
  ${({ theme }) => css`
    padding: 5px 18px;
    border-radius: 24px;
    background-color: ${theme.color.primary};
    text-align: center;
  `}
`;

const Date = styled(Text)`
  margin-top: auto;
  align-self: flex-end;
`;
