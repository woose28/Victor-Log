import { navigate } from 'gatsby';

const isBrowser = typeof window !== 'undefined';

const IndexPage = () => {
  if (isBrowser) {
    navigate('/post');
  }

  return null;
};

export default IndexPage;

export const Head = () => <title>Victor Log</title>;
