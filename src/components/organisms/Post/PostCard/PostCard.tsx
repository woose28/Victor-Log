import { PostCardProps } from './PostCard.type';
import * as Styled from './PostCard.style';
import { HeroImage, TagList, Link } from 'components';
import { PATH } from 'constants/route';

const PostCard = ({ title, date, slug, tags, hero_image, hero_image_alt }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link to={`${PATH.POST}${slug}`}>
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
      </Link>
    </Styled.Wrapper>
  );
};

export default PostCard;
