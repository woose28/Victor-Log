import PostItem from 'pages/post/components/PostItem/PostItem';
import { PostItemProps } from 'pages/post/components/PostItem/PostItem.type';

export default {
  title: 'post/PostItem',
  component: PostItem,
};

export const DefaultPostItem = (args: PostItemProps) => <PostItem {...args} />;

DefaultPostItem.args = {
  title: '게시글 제목',
  date: '2022-01-01',
  tags: ['태그1', '아주 긴 태그', '태그3', '태그4'],
};
