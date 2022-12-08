import { Post, PostFrontMatter } from 'models/post';

export type PostItemProps = Pick<Post, 'excerpt'> & PostFrontMatter;
