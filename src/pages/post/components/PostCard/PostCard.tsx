import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { PostCardProps } from 'pages/post/components/PostCard/PostCard.type';
import { HeroImage, TagList } from 'pages/post/components';

const PostCard = ({ title, date, slug, tags, hero_image, hero_image_alt }: PostCardProps) => {
  return (
    <Wrapper>
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
        <PostInfoWrapper>
          <Title>{title}</Title>
          <TagList tags={tags} />
          <Date>{date}</Date>
        </PostInfoWrapper>
      </NavLink>
    </Wrapper>
  );
};

export default PostCard;

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 266px;
    border-radius: 0.625rem 0.625rem 0 0;
    background-color: ${theme.color.secondary};
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding: 15px;
`;

const Title = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.onSecondary};
  `}
`;

const Date = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    margin-top: auto;
    color: ${theme.color.subText};
    font-size: 0.75rem;
  `}
`;
