import type { CSSProperties, PropsWithChildren } from 'react';
import Link from 'components/@common/Link/Link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from 'components';
import { theme } from 'styles/theme';
import { PATH } from 'constants/route';

export type TagItemProps = {
  name: string;
  variant?: 'primary' | 'outline';
  to?: string;
};

type WrapperProps = {
  background: CSSProperties['background'];
  outline: CSSProperties['borderColor'];
};

const COLOR = {
  primary: {
    background: theme.color.primary,
    outline: theme.color.primary,
    font: theme.color.onPrimary,
  },
  outline: {
    background: theme.color.background,
    outline: theme.color.primary,
    font: theme.color.primary,
  },
};

const TagItem = ({
  children,
  name,
  variant = 'primary',
  to = `${PATH.TAG}${name}`,
}: PropsWithChildren<TagItemProps>) => {
  const { background, outline, font } = COLOR[variant];

  return (
    <Wrapper to={to}>
      <TagText as="span" size="small" color={font} background={background} outline={outline}>
        {children}
      </TagText>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
`;

const TagText = styled(Text)<WrapperProps>`
  ${({ background, outline }) => css`
    padding: 5px 20px;
    background-color: ${background};
    border-radius: 25px;
    border: solid 1px ${outline};
  `}
`;

export default TagItem;
