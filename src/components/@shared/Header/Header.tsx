import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import Link from 'gatsby-link';
import { FlexBox, Text } from 'components';

const Header = () => {
  const theme = useTheme();

  return (
    <Wrapper as="header" alignItems="center">
      <Text style={{ flexGrow: 1 }} size={20} color={theme.color.primary} fontWeight="bold">
        VICTOR LOG
      </Text>
      <NavLink style={{ marginRight: '2.813rem' }} to="/about">
        <Text size={16} color={theme.color.primary}>
          About
        </Text>
      </NavLink>
      <NavLink to="/post/">
        <Text size={16} color={theme.color.primary}>
          Posts
        </Text>
      </NavLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(FlexBox)`
  ${({ theme }) => css`
    padding: 0 3.125rem;
    background-color: ${theme.color.background};
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
