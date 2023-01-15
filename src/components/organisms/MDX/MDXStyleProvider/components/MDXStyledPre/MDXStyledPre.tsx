import { PropsWithChildren, ReactElement } from 'react';
import styled from '@emotion/styled';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const MDXStyledPre = ({ children }: PropsWithChildren) => {
  const className = (children as ReactElement).props.className;
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches?.groups?.lang ?? '';
  const code = (children as ReactElement).props.children.trim();

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  );
};

export default MDXStyledPre;

const StyledPre = styled.pre`
  margin: 3px 0;
  padding: 20px;
  border-radius: 5px;
  overflow-x: scroll;
`;
