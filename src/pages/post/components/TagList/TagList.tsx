import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TagListProps } from 'pages/post/components/TagList/TagList.type';

const TagList = ({ tags, style }: TagListProps) => {
  return (
    <Wrapper style={style}>
      {tags.map((tag) => (
        <TagItem key={tag}>{tag}</TagItem>
      ))}
    </Wrapper>
  );
};

export default TagList;

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TagItem = styled.li`
  ${({ theme }) => css`
    padding: 5px 18px;
    border-radius: 24px;
    background-color: ${theme.color.primary};
    font-size: 0.75rem;
    color: ${theme.color.onPrimary};
    text-align: center;
  `}
`;
