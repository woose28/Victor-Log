import { navigate } from 'gatsby';
import { SEO } from 'components';

const isBrowser = typeof window !== 'undefined';

const IndexPage = () => {
  if (isBrowser) {
    navigate('/post');
  }

  return null;
};

export default IndexPage;

export const Head = () => (
  <SEO>
    <title>Victor Log</title>
  </SEO>
);
