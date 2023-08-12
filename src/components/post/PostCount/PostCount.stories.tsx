import PostCount from './PostCount';
import type { PostCountProps } from './PostCount';

export default {
  title: 'post/PostCount',
  component: PostCount,
};

export const DefaultPostCount = (args: PostCountProps) => <PostCount {...args} />;

DefaultPostCount.args = {
  count: 10,
  tag: '태그',
};
