import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { SEO } from 'components';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <span>페이지를 찾을 수 없습니다.</span>
      <Link to="/">메인 페이지로 이동하기</Link>
    </Wrapper>
  );
};

export default NotFoundPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Head = () => (
  <SEO>
    <title>Victor Log | Not found</title>
  </SEO>
);
