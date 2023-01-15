import { PostCardProps } from './PostCard.type';
import * as Styled from './PostCard.style';
import { HeroImage, TagList } from 'components';

const PostCard = ({ title, date, slug, tags, hero_image, hero_image_alt }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.NavLink to={`/post/${slug}`}>
        <HeroImage
          hero_image={hero_image}
          hero_image_alt={hero_image_alt}
          style={{
            width: '100%',
            height: '200px',
            borderRadius: '10px 10px 0 0',
          }}
        />
        <Styled.PostInfoWrapper>
          <Styled.Title>{title}</Styled.Title>
          <TagList tags={tags} />
          <Styled.Date>{date}</Styled.Date>
        </Styled.PostInfoWrapper>
      </Styled.NavLink>
    </Styled.Wrapper>
  );
};

export default PostCard;
