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

export type UsePostPageProps = {
  postEdges: PostPageEdge[];
};
