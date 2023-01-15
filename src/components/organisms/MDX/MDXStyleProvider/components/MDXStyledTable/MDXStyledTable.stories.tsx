import MDXStyledTable from './MDXStyledTable';
import { MDXStyledTableStorybookProps } from 'components/@shared/MDXStyleProvider/components/MDXStyledTable/MDXStyledTable.type';
import { MDXStyledTh, MDXStyledTr, MDXStyledTd } from '../index';

export default {
  title: 'MDX/MDXStyledTable',
  component: MDXStyledTable,
};

export const DefaultMDXStyledTable = ({ heading, rows }: MDXStyledTableStorybookProps) => (
  <MDXStyledTable>
    <thead>
      <MDXStyledTr>
        {heading.map((cell, index) => (
          <MDXStyledTh key={index}>{cell}</MDXStyledTh>
        ))}
      </MDXStyledTr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <MDXStyledTr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <MDXStyledTd key={cellIndex}>{cell}</MDXStyledTd>
          ))}
        </MDXStyledTr>
      ))}
    </tbody>
  </MDXStyledTable>
);

DefaultMDXStyledTable.args = {
  heading: ['', '첫 번째 열', '두 번째 열', '세 번째 열'],
  rows: [
    ['첫 번째 행', 1, 2, 3],
    ['두 번째 행', 4, 5, 6],
    ['세 번째 행', 7, 8, 9],
  ],
};
