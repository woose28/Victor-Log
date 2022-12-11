import styled from '@emotion/styled';

const MDXStyledLi = styled.li`
  position: relative;
  font-size: 1rem;
  padding: 3px 0 3px 1rem;

  &::before {
    position: absolute;
    left: 0;
    width: 1rem;
  }

  ul {
    li {
      &::before {
        content: '-';
      }
    }
  }
`;

export default MDXStyledLi;
