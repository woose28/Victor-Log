import { PostFrontMatter } from 'models/post';

type PostPageNode = {
  id: string;
  frontmatter: PostFrontMatter;
};

type PostPageEdge = {
  node: PostPageNode;
};

export type PostPageDataType = {
  allMdx: {
    edges: PostPageEdge[];
  };
};

export type PostDetailPageDataType = {
  mdx: {
    frontmatter: Pick<PostFrontMatter, 'title' | 'date' | 'tags' | 'hero_image' | 'hero_image_alt'>;
  };
};

export type UsePostPageProps = {
  postEdges: PostPageEdge[];
};
