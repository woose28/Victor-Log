import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';

const MarkdownStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <MDXProvider
      components={{
        h1: StyledH1,
        h2: StyledH2,
        h3: StyledH3,
        p: StyledP,
        strong: StyledStrong,
        blockquote: StyledBlockquote,
        ul: StyledUl,
        ol: StyledOl,
        a: StyledA,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MarkdownStyleProvider;

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-size: 1.85rem;
  font-weight: 600;
`;

const StyledH2 = styled.h2`
  margin-top: 1.4rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledH3 = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledP = styled.p`
  padding: 3px 0;
  line-height: 1.5;
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledBlockquote = styled.blockquote`
  padding: 2px 14px;

  border-left: 3px solid black;
`;

const StyledUl = styled.ul`
  li {
    &::before {
      display: inline-block;
      content: '•';
      width: 1rem;
      margin-right: 2px;
    }
  }
`;

const StyledOl = styled.ol`
  li {
    &::before {
      display: inline-block;
      content: counter(list-item) '.';
      width: 1rem;
      margin-right: 2px;
    }
  }
`;

const StyledA = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    text-decoration: none;
  `}
`;
