import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import Link from 'gatsby-link';
import { FlexBox, Text } from 'components';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';

const PostItem = ({ title, date, slug, tags }: PostItemProps) => {
  const theme = useTheme();

  return (
    <Wrapper flexDirection="column">
      <NavLink to={`/post/${slug}`}>
        {/* TODO: 썸네일 이미지이 추가되면 alt 속성도 추가하기 */}
        <Thumbnail />
        <PostInfoWrapper flexDirection="column" gap="15px">
          <Text color={theme.color.onSecondary} size={16}>
            {title}
          </Text>
          <FlexBox as="ul" flexWrap="wrap" gap="15px">
            {tags.map((tag) => (
              <TagItem as="li" key={tag} color={theme.color.onPrimary} size={12}>
                {tag}
              </TagItem>
            ))}
          </FlexBox>
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

const Thumbnail = styled.img`
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
