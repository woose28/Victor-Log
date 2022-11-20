import { ChildrenImageSharp } from 'types/gatsby';

export interface PostFrontMatter {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  hero_image: {
    childrenImageSharp: ChildrenImageSharp[];
  };
  hero_image_alt: string;
}
