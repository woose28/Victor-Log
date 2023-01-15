import MDXStyledUl from './MDXStyledUl';
import { MDXStyledUlStorybookProps } from './MDXStyledUl.type';
import { MDXStyledLi } from '../index';

export default {
  title: 'MDX/MDXStyledUl',
  component: MDXStyledUl,
};

export const DefaultMDXStyledUl = ({ items }: MDXStyledUlStorybookProps) => (
  <MDXStyledUl>
    {items.map((item, index) => (
      <MDXStyledLi key={index}>{item}</MDXStyledLi>
    ))}
  </MDXStyledUl>
);

DefaultMDXStyledUl.args = {
  items: ['목록1', '목록2', '목록3', '목록4'],
};
