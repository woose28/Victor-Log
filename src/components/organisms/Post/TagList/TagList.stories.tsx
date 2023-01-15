import TagList from './TagList';
import { TagListProps } from './TagList.type';

export default {
  title: 'post/TagList',
  component: TagList,
};

export const DefaultTagList = (args: TagListProps) => <TagList {...args} />;

DefaultTagList.args = {
  tags: ['태그1', '아주 긴 태그', '태그3', '태그4'],
};
