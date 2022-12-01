import { PropsWithChildren, ReactNode, ReactElement } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const MarkdownStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <MDXProvider
      components={{
        h1: StyledH1,
        h2: StyledH2,
        h3: StyledH3,
        p: StyledP,
        strong: StyledStrong,
        blockquote: StyledBlockquote,
        ul: StyledUl,
        ol: StyledOl,
        a: StyledA,
        pre: CodeBlock,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MarkdownStyleProvider;

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-size: 1.85rem;
  font-weight: 600;
`;

const StyledH2 = styled.h2`
  margin-top: 1.4rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledH3 = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledP = styled.p`
  padding: 3px 0;
  line-height: 1.5;
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledBlockquote = styled.blockquote`
  padding: 2px 14px;

  border-left: 3px solid black;
`;

const StyledUl = styled.ul`
  li {
    &::before {
      display: inline-block;
      content: '•';
      width: 1rem;
      margin-right: 2px;
    }
  }
`;

const StyledOl = styled.ol`
  li {
    &::before {
      display: inline-block;
      content: counter(list-item) '.';
      width: 1rem;
      margin-right: 2px;
    }
  }
`;

const StyledA = styled.a`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    text-decoration: none;
  `}
`;

const CodeBlock = ({ children }: PropsWithChildren) => {
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

const StyledPre = styled.pre`
  padding: 20px;
  border-radius: 5px;
`;
