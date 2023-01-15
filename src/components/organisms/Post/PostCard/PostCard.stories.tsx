import PostCard from './PostCard';
import { PostCardProps } from './PostCard.type';

export default {
  title: 'post/PostCard',
  component: PostCard,
};

export const DefaultPostCard = (args: PostCardProps) => <PostCard {...args} />;

DefaultPostCard.args = {
  title: '게시글 제목',
  date: '2022-01-01',
  tags: ['태그1', '아주 긴 태그', '태그3', '태그4'],
};
