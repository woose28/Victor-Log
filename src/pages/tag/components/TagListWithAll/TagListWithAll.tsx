import { TagItem, TagList } from 'components';
import { PATH } from 'constants/route';
import { useTagListWithAll } from 'pages/tag/components/TagListWithAll/useTagListWithAll';

export type Tag = {
  name: string;
  count: number;
};

export type TagListWithProps = {
  tags: Tag[];
  currentTag: string | null;
};

const TagListWithAll = ({ tags, currentTag, ...props }: TagListWithProps) => {
  const { allTag, selectedTag } = useTagListWithAll({ tags, currentTag });

  return (
    <TagList.Wrapper {...props}>
      <TagItem
        name={allTag.name}
        variant={allTag.name === selectedTag ? 'primary' : 'outline'}
        to={PATH.TAG}
      >{`${allTag.name} (${allTag.count})`}</TagItem>
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
