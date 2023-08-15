import type { PageProps } from 'gatsby';
import type { Tag, Posts } from './index';

type UseTagPageProps = {
  tags: Tag[];
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

export const useTagPage = ({ tags, posts, allPosts, location }: UseTagPageProps) => {
  const parsedTag = tags.map(({ fieldValue, totalCount }) => ({
    name: fieldValue,
    count: totalCount,
  }));

  const tagParam = getTagParams(location.pathname);

  const isExistTagParam = tagParam !== null;

  const { edges: postEdges, totalCount } = isExistTagParam ? posts : allPosts;

  return {
    parsedTag,
    tagParam,
    postEdges,
    totalCount,
  };
};
