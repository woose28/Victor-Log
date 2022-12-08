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
