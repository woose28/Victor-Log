import TagList from 'pages/post/components/TagList/TagList';
import { TagListProps } from 'pages/post/components/TagList/TagList.type';

export default {
  title: 'post/TagList',
  component: TagList,
};

export const DefaultTagList = (args: TagListProps) => <TagList {...args} />;

DefaultTagList.args = {
  tags: ['태그1', '아주 긴 태그', '태그3', '태그4'],
};
