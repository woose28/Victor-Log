import type { PropsWithChildren } from 'react';
import { FlexBox, TagItem } from 'components';

type Tag = {
  name: string;
  count: number;
};

export type TagListProps = {
  tags: string[] | Tag[];
};

const getTagText = (tag: string | Tag) => {
  if (typeof tag === 'string') {
    return { name: tag, text: tag };
  }

  return {
    name: tag.name,
    text: `${tag.name} (${tag.count})`,
  };
};

const TagList = ({ tags, ...props }: TagListProps) => {
  return (
    <Wrapper {...props}>
      {tags.map((tag) => {
        const { name, text } = getTagText(tag);

        return (
          <TagItem key={name} name={name}>
            {text}
          </TagItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = ({ children, ...props }: PropsWithChildren) => {
  return (
    <FlexBox gap={15} wrap="wrap" {...props}>
      {children}
    </FlexBox>
  );
};

TagList.Wrapper = Wrapper;

export default TagList;
