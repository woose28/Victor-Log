import { PropsWithChildren } from 'react';
import MDXStyledH2 from './MDXStyledH2';

export default {
  title: 'MDXStyledProvider/MDXStyledH2',
  component: MDXStyledH2,
};

export const DefaultMDXStyledH2 = ({ children }: PropsWithChildren) => (
  <MDXStyledH2>{children}</MDXStyledH2>
);

DefaultMDXStyledH2.args = {
  children: '제목2',
};
