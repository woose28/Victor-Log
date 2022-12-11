import { PropsWithChildren } from 'react';
import MDXStyledCode from './MDXStyledCode';

export default {
  title: 'MDXStyledProvider/MDXStyledCode',
  component: MDXStyledCode,
};

export const DefaultMDXStyledCode = ({ children }: PropsWithChildren) => (
  <MDXStyledCode>{children}</MDXStyledCode>
);

DefaultMDXStyledCode.args = {
  children: '이것은 코드입니다.',
};
