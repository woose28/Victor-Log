import { PostFrontMatter } from 'models/post';

export type PostItemProps = PostFrontMatter;

export type UsePostItemProps = Pick<PostItemProps, 'hero_image'>;
