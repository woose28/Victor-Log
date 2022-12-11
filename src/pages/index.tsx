import { navigate } from 'gatsby';

const IndexPage = () => {
  navigate('/post');

  return null;
};

export default IndexPage;

export const Head = () => <title>Victor Log</title>;
