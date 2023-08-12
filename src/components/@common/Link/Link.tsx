import type { PropsWithChildren } from 'react';
import GatsbyLink from 'gatsby-link';
import type { GatsbyLinkProps } from 'gatsby-link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type LinkProps<TState> = Pick<GatsbyLinkProps<TState>, 'onClick' | 'replace' | 'to'> & {
  enableHoverStyle?: boolean;
};

type WrapperProps = Pick<LinkProps<unknown>, 'enableHoverStyle'>;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const Link = <T extends unknown>({
  children,
  enableHoverStyle = true,
  ...props
}: PropsWithChildren<LinkProps<T>>) => {
  return (
    <Wrapper enableHoverStyle={enableHoverStyle} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(GatsbyLink)<WrapperProps>`
  text-decoration: none;

  transition: all 0.2s linear;

  ${({ enableHoverStyle }) =>
    enableHoverStyle &&
    css`
      &:hover {
        filter: brightness(0.9);
      }
    `}
`;

export default Link;
