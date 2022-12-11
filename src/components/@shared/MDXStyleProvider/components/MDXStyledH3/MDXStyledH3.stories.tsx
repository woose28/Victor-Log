import { PropsWithChildren } from 'react';
import MDXStyledH3 from './MDXStyledH3';

export default {
  title: 'MDXStyledProvider/MDXStyledH3',
  component: MDXStyledH3,
};

export const DefaultMDXStyledH3 = ({ children }: PropsWithChildren) => (
  <MDXStyledH3>{children}</MDXStyledH3>
);

DefaultMDXStyledH3.args = {
  children: '제목3',
};
