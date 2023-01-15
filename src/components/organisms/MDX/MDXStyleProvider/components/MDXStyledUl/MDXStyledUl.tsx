import styled from '@emotion/styled';

const MDXStyledUl = styled.ul`
  li {
    &::before {
      content: '•';
    }
  }
`;

export default MDXStyledUl;
