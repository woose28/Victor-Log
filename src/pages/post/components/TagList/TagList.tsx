import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FlexBox, Text } from 'components';
import { TagListProps } from 'pages/post/components/TagList/TagList.type';
import { useTagList } from 'pages/post/components/TagList/useTagList';

const TagList = ({ tags, style }: TagListProps) => {
  const { theme } = useTagList();

  return (
    <FlexBox as="ul" flexWrap="wrap" gap="15px" style={style}>
      {tags.map((tag) => (
        <TagItem as="li" key={tag} color={theme.color.onPrimary} size={12}>
          {tag}
        </TagItem>
      ))}
    </FlexBox>
  );
};

export default TagList;

const TagItem = styled(Text)`
  ${({ theme }) => css`
    padding: 5px 18px;
    border-radius: 24px;
    background-color: ${theme.color.primary};
    text-align: center;
  `}
`;
