import { PropsWithChildren, ReactElement } from 'react';
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
        li: StyledLi,
        a: StyledA,
        pre: CodeBlock,
        code: StyledCode,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MarkdownStyleProvider;

const StyledH1 = styled.h1`
  margin: 2rem 0 3px;
  font-size: 1.85rem;
  font-weight: 600;
`;

const StyledH2 = styled.h2`
  margin: 1.4rem 0 3px;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledH3 = styled.h3`
  margin: 1rem 0 3px;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledP = styled.p`
  padding: 0 0 6px;
  line-height: 1.5;
  font-size: 1rem;
`;

const StyledStrong = styled.strong`
  font-weight: 600;
`;

const StyledBlockquote = styled.blockquote`
  ${({ theme }) => css`
    margin-bottom: 3px;
    padding: 2px 14px;

    border-left: 3px solid ${theme.color.tertiary};
  `}
`;

const StyledUl = styled.ul`
  li {
    &::before {
      content: '•';
    }
  }
`;

const StyledOl = styled.ol`
  li {
    &::before {
      content: counter(list-item) '.';
    }
  }
`;

const StyledLi = styled.li`
  position: relative;
  font-size: 1rem;
  padding: 3px 0 3px 1rem;

  &::before {
    position: absolute;
    left: 0;
    width: 1rem;
  }

  ul {
    li {
      &::before {
        content: '-';
      }
    }
  }
`;

const StyledA = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.color.primary};
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      left: 25%;
      bottom: 0;
      width: 0;
      height: 1px;
    }

    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.5px;
      background-color: ${theme.color.primary};
      transition: all 0.25s ease-out;
    }
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
  margin: 3px 0;
  padding: 20px;
  border-radius: 5px;
  overflow-x: scroll;
`;

const StyledCode = styled.code`
  ${({ theme }) => css`
    padding: 0.2em 0.4em;
    background-color: ${theme.color.codeBackground};
    border-radius: 3px;
    color: ${theme.color.primary};
    font-size: 85%;
    font-weight: 600;
  `}
`;
