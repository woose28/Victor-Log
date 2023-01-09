import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Text } from 'components';
import { TagListProps } from 'pages/post/components/TagList/TagList.type';
import { useTagList } from 'pages/post/components/TagList/useTagList';

const TagList = ({ tags, style }: TagListProps) => {
  const { theme } = useTagList();

  return (
    <Wrapper style={style}>
      {tags.map((tag) => (
        <TagItem as="li" key={tag} color={theme.color.onPrimary} size={12}>
          {tag}
        </TagItem>
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

const TagItem = styled(Text)`
  ${({ theme }) => css`
    padding: 5px 18px;
    border-radius: 24px;
    background-color: ${theme.color.primary};
    text-align: center;
  `}
`;
