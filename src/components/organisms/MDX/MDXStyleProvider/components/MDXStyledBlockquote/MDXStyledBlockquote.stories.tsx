import { PropsWithChildren } from 'react';
import MDXStyledBlockquote from './MDXStyledBlockquote';

export default {
  title: 'MDX/MDXStyledBlockquote',
  component: MDXStyledBlockquote,
};

export const DefaultMDXStyledBlockquote = ({ children }: PropsWithChildren) => (
  <MDXStyledBlockquote>{children}</MDXStyledBlockquote>
);

DefaultMDXStyledBlockquote.args = {
  children: '이것은 인용문입니다.',
};
