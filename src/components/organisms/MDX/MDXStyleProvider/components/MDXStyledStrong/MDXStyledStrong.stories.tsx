import { PropsWithChildren } from 'react';
import MDXStyledStrong from './MDXStyledStrong';

export default {
  title: 'MDX/MDXStyledStrong',
  component: MDXStyledStrong,
};

export const DefaultMDXStyledStrong = ({ children }: PropsWithChildren) => (
  <MDXStyledStrong>{children}</MDXStyledStrong>
);

DefaultMDXStyledStrong.args = {
  children: '이것은 강조 텍스트입니다.',
};
