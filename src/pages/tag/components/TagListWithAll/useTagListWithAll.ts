import type { Tag } from './TagListWithAll';

type UseTagListWithAllProps = {
  tags: Tag[];
  currentTag: string | null;
};

const ALL_TAG_NAME = 'All';

export const useTagListWithAll = ({ tags, currentTag }: UseTagListWithAllProps) => {
  const allPostCount = tags.reduce((acc, tag) => acc + tag.count, 0);

  const allTag = { name: ALL_TAG_NAME, count: allPostCount };

  const selectedTag = currentTag === null ? ALL_TAG_NAME : currentTag;

  return {
    allTag,
    selectedTag,
  };
};
