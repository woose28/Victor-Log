import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'gatsby-link';
import { HeaderProps } from 'components/Header/Header.type';
import { DISPLAY, LAYER } from 'styles/css';

const Header = ({ backgroundColor }: HeaderProps) => {
  return (
    <Wrapper style={{ backgroundColor }}>
      <NavLink to="/post">
        <LogoText>VICTOR LOG</LogoText>
      </NavLink>
      <NavLink
        css={css`
          margin: 0 2.813rem 0 auto;
        `}
        to="/about"
      >
        <LinkText>About</LinkText>
      </NavLink>
      <NavLink to="/post">
        <LinkText>Post</LinkText>
      </NavLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
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

const LogoText = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    color: ${theme.color.primary};
    font-weight: 700;
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const LinkText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.primary};
  `}
`;
