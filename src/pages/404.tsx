import { Link } from 'gatsby';
import { FlexBox, Layout } from 'components';

const NotFoundPage = () => {
  return (
    <Layout>
      <FlexBox flexDirection="column" gap="20px">
        <span>페이지를 찾을 수 없습니다.</span>
        <Link to="/">메인 페이지로 이동하기</Link>
      </FlexBox>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Victor Log | Not found</title>;
