import { css } from '@emotion/react';
import { PostItemProps } from './PostItem.type';
import * as Styled from './PostItem.style';
import { HeroImage, Link, TagList } from 'components';
import { PATH } from 'constants/route';

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
    <Link to={`${PATH.POST}${slug}`}>
      <Styled.Wrapper>
        <HeroImage
          hero_image={hero_image}
          hero_image_alt={hero_image_alt}
          style={{
            width: '208px',
            borderRadius: '10px 0 0 10px',
          }}
        />
        <Styled.PostInfoWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Summary>{excerpt}</Styled.Summary>
          <TagList
            tags={tags}
            css={css`
              margin-top: 20px;
            `}
          />
          <Styled.Date>{date}</Styled.Date>
        </Styled.PostInfoWrapper>
      </Styled.Wrapper>
    </Link>
  );
};

export default PostItem;
