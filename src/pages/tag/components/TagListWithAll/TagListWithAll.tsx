import { TagItem, TagList } from 'components';
import { PATH } from 'constants/route';
import { useTagListWithAll } from 'pages/tag/components/TagListWithAll/useTagListWithAll';
import type { Tag } from 'models/post';

export type TagListWithProps = {
  tags: Tag[];
  totalCount: number;
  currentTag: string | null;
};

const ALL_TAG_NAME = 'All';

const TagListWithAll = ({ tags, totalCount, currentTag, ...props }: TagListWithProps) => {
  const { selectedTag } = useTagListWithAll({ currentTag });

  return (
    <TagList.Wrapper {...props}>
      <TagItem
        name={ALL_TAG_NAME}
        variant={ALL_TAG_NAME === selectedTag ? 'primary' : 'outline'}
        to={PATH.TAG}
      >{`${ALL_TAG_NAME} (${totalCount})`}</TagItem>
      {tags.map(({ name, count }) => {
        return (
          <TagItem key={name} name={name} variant={name === selectedTag ? 'primary' : 'outline'}>
            {`${name} (${count})`}
          </TagItem>
        );
      })}
    </TagList.Wrapper>
  );
};

export default TagListWithAll;
