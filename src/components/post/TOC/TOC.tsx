import React from 'react';
import type { PropsWithChildren } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexBox, Link, Text } from 'components';
import { useTOC } from './useTOC';

type Item = {
  url: string;
  title: string;
  items?: Item[];
};

export type TOCProps = {
  items: Item[];
};

export type TOCItem = Pick<Item, 'url'>;

export type TOCItems = {
  items: Item[];
};

export const INTERSECTING_CLASS_NAME = 'intersecting';

const TOC = ({ items }: TOCProps) => {
  useTOC();

  return (
    <Wrapper direction="column" gap={5}>
      {items.map(({ url, title, items: childItems }) => (
        <>
          <TOCItem key={title} url={url}>
            {title}
          </TOCItem>
          {childItems && <TOCItems items={childItems} />}
        </>
      ))}
    </Wrapper>
  );
};

const TOCItems = ({ items }: TOCItems) => {
  return (
    <TOCItemsWrapper direction="column">
      {items.map(({ url, title, items: childItems }) => (
        <>
          <TOCItem key={title} url={url}>
            {title}
          </TOCItem>
          {childItems && <TOCItems items={childItems} />}
        </>
      ))}
    </TOCItemsWrapper>
  );
};

const TOCItem = ({ url, children }: PropsWithChildren<TOCItem>) => {
  const theme = useTheme();
  return (
    <Link
      to={url}
      css={css`
        color: ${theme.color.tertiary};

        &.${INTERSECTING_CLASS_NAME} {
          color: ${theme.color.primary};
        }
      `}
    >
      <Text size="regular">{children}</Text>
    </Link>
  );
};

const Wrapper = styled(FlexBox)`
  padding: 10px 10px 10px 15px;

  ${({ theme }) => css`
    border-left: solid 1px ${theme.color.tertiary};
  `}
`;

const TOCItemsWrapper = styled(FlexBox)`
  padding-left: 15px;
`;
export default TOC;
