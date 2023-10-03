import type { PageProps } from 'gatsby';
import type { Posts } from 'models/post';

type UseTagPageProps = {
  posts: Posts;
  allPosts: Posts;
  location: PageProps['location'];
};

const isNonexistentTagParam = (params: Array<string>) => params.length < 3;
const isEmptyTagParam = (param: string) => param.length === 0;

const getTagParams = (pathname: string) => {
  const params = decodeURI(pathname).split('/');

  if (isNonexistentTagParam(params)) {
    return null;
  }

  const tagParam = params[2];

  if (isEmptyTagParam(tagParam)) {
    return null;
  }

  return tagParam;
};

export const useTagPage = ({ posts, allPosts, location }: UseTagPageProps) => {
  const tagParam = getTagParams(location.pathname);

  const isExistTagParam = tagParam !== null;

  const { edges: postEdges, totalCount: tagPostCount } = isExistTagParam ? posts : allPosts;

  return {
    tagParam,
    postEdges,
    tagPostCount,
  };
};
