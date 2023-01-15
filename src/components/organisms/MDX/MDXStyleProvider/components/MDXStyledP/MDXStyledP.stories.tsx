import { PropsWithChildren } from 'react';
import MDXStyledP from './MDXStyledP';

export default {
  title: 'MDX/MDXStyledP',
  component: MDXStyledP,
};

export const DefaultMDXStyledP = ({ children }: PropsWithChildren) => (
  <MDXStyledP>{children}</MDXStyledP>
);

DefaultMDXStyledP.args = {
  children: '이것은 일반 텍스트입니다.',
};
