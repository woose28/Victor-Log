import styled from '@emotion/styled';

const MDXStyledOl = styled.ol`
  li {
    &::before {
      content: counter(list-item) '.';
    }
  }
`;

export default MDXStyledOl;
