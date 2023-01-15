import { TagListProps } from './TagList.type';
import * as Styled from './TagList.style';

const TagList = ({ tags, style }: TagListProps) => {
  return (
    <Styled.Wrapper style={style}>
      {tags.map((tag) => (
        <Styled.TagItem key={tag}>{tag}</Styled.TagItem>
      ))}
    </Styled.Wrapper>
  );
};

export default TagList;
