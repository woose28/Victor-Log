import { PropsWithChildren } from 'react';
import MDXStyledPre from './MDXStyledPre';

export default {
  title: 'MDX/MDXStyledPre',
  component: MDXStyledPre,
};

export const DefaultMDXStyledPre = ({ children }: PropsWithChildren) => (
  <MDXStyledPre>
    <pre className="language-javascript">{children}</pre>
  </MDXStyledPre>
);

DefaultMDXStyledPre.args = {
  children: 'const bar = 123',
};
