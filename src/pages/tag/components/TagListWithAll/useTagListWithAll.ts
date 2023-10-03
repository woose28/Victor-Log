type UseTagListWithAllProps = {
  currentTag: string | null;
};

const ALL_TAG_NAME = 'All';

export const useTagListWithAll = ({ currentTag }: UseTagListWithAllProps) => {
  const selectedTag = currentTag === null ? ALL_TAG_NAME : currentTag;

  return {
    selectedTag,
  };
};
