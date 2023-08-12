import TagItem from './TagItem';
import type { TagItemProps } from './TagItem';

type DefaultTagItemProps = {
  text: string;
} & TagItemProps;

export default {
  title: 'post/TagItem',
  component: TagItem,
};

export const DefaultTagItem = (args: DefaultTagItemProps) => {
  const { name, variant, text } = args;

  return (
    <TagItem name={name} variant={variant}>
      {text}
    </TagItem>
  );
};

DefaultTagItem.args = {
  text: '태그 이름',
  name: '태그 이름',
};
