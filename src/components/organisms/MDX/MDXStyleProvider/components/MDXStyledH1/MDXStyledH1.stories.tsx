import { PropsWithChildren } from 'react';
import MDXStyledH1 from './MDXStyledH1';

export default {
  title: 'MDX/MDXStyledH1',
  component: MDXStyledH1,
};

export const DefaultMDXStyledH1 = ({ children }: PropsWithChildren) => (
  <MDXStyledH1>{children}</MDXStyledH1>
);

DefaultMDXStyledH1.args = {
  children: '제목1',
};
