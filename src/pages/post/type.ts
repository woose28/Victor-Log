import { Post, PostFrontMatter } from 'models/post';

type PostPageEdge = {
  node: Post;
};

export type PostPageDataType = {
  allMdx: {
    edges: PostPageEdge[];
    totalCount: number;
  };
};

export type PostDetailPageDataType = {
  mdx: {
    frontmatter: Pick<PostFrontMatter, 'title' | 'date' | 'tags' | 'hero_image' | 'hero_image_alt'>;
  };
};
