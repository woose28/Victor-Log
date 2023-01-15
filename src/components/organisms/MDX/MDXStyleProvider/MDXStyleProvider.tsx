import { PropsWithChildren } from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  MDXStyledBlockquote,
  MDXStyledH1,
  MDXStyledH2,
  MDXStyledH3,
  MDXStyledP,
  MDXStyledStrong,
  MDXStyledUl,
  MDXStyledOl,
  MDXStyledLi,
  MDXStyledA,
  MDXStyledPre,
  MDXStyledCode,
  MDXStyledTable,
  MDXStyledTr,
  MDXStyledTh,
  MDXStyledTd,
} from './components';

const MDXStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <MDXProvider
      components={{
        h1: MDXStyledH1,
        h2: MDXStyledH2,
        h3: MDXStyledH3,
        p: MDXStyledP,
        strong: MDXStyledStrong,
        blockquote: MDXStyledBlockquote,
        ul: MDXStyledUl,
        ol: MDXStyledOl,
        li: MDXStyledLi,
        a: MDXStyledA,
        pre: MDXStyledPre,
        code: MDXStyledCode,
        table: MDXStyledTable,
        tr: MDXStyledTr,
        th: MDXStyledTh,
        td: MDXStyledTd,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MDXStyleProvider;
