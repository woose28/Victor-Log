import MDXStyledOl from './MDXStyledOl';
import { MDXStyledOlStorybookProps } from './MDXStyledOl.type';
import { MDXStyledLi } from '../index';

export default {
  title: 'MDXStyledProvider/MDXStyledOl',
  component: MDXStyledOl,
};

export const DefaultMDXStyledOl = ({ items }: MDXStyledOlStorybookProps) => (
  <MDXStyledOl>
    {items.map((item, index) => (
      <MDXStyledLi key={index}>{item}</MDXStyledLi>
    ))}
  </MDXStyledOl>
);

DefaultMDXStyledOl.args = {
  items: ['목록1', '목록2', '목록3', '목록4'],
};
