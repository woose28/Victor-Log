import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';
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
          <Title>{title}</Title>
          <Summary>{excerpt}</Summary>
          <TagList
            tags={tags}
            style={{
              marginTop: '20px',
            }}
          />
          <Date>{date}</Date>
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

const Title = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${theme.color.onSecondary};
  `}
`;

const Summary = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-height: 3rem;
    margin-top: 10px;

    font-size: 1rem;
    font-weight: 300;
    color: ${theme.color.onSecondary};

    overflow: hidden;
  `}
`;

const Date = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    height: 1rem;
    margin-top: 5px;
    font-size: 0.75rem;
    color: ${theme.color.subText};
  `}
`;
