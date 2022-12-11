import { PropsWithChildren } from 'react';
import MDXStyledA from './MDXStyledA';

export default {
  title: 'MDXStyledProvider/MDXStyledA',
  component: MDXStyledA,
};

export const DefaultMDXStyledA = ({ children }: PropsWithChildren) => (
  <MDXStyledA href="">{children}</MDXStyledA>
);

DefaultMDXStyledA.args = {
  children: '이것은 링크입니다.',
};
