import { ChildrenImageSharp } from 'types/gatsby';

export type PostFrontMatter = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  hero_image: {
    childrenImageSharp: ChildrenImageSharp[];
  };
  hero_image_alt: string;
};

export type Post = {
  id: string;
  excerpt: string;
  frontmatter: PostFrontMatter;
};

type PostEdge = {
  node: Post;
};

export type Posts = {
  edges: PostEdge[];
  totalCount: number;
};

export type Tag = {
  name: string;
  count: number;
};

export type Tags = {
  group: Tag[];
};
