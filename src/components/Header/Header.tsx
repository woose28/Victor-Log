import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import Link from 'gatsby-link';
import { FlexBox, Text } from 'components';
import { DISPLAY, LAYER } from 'styles/css';

const Header = () => {
  const theme = useTheme();

  return (
    <Wrapper as="header" alignItems="center">
      <NavLink style={{ flexGrow: 1 }} to="/post">
        <Text size={20} color={theme.color.primary} fontWeight="bold">
          VICTOR LOG
        </Text>
      </NavLink>
      {/* <NavLink style={{ marginRight: '2.813rem' }} to="/about">
        <Text size={16} color={theme.color.primary}>
          About
        </Text>
      </NavLink> */}
      <NavLink to="/post">
        <Text size={16} color={theme.color.primary}>
          Post
        </Text>
      </NavLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(FlexBox)`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    padding: 17px 50px;
    background-color: ${theme.color.background};
    z-index: ${LAYER.HEADER};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 17px 20px;
    }
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
