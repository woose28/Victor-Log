import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'components';
import { GetFixedCustomStyle } from './Header.type';
import { DISPLAY } from 'styles/css';

const getFixedCustomStyle: GetFixedCustomStyle = (theme) => css`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 17px 50px;
  background-color: ${theme.color.background};

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    padding: 17px 20px;
  }
`;

const LogoText = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    color: ${theme.color.primary};
    font-weight: 700;
  `}
`;

const NavLink = styled(Link)`
  padding: 3px 8px;

  border-radius: 5px;

  ${({ theme }) => css`
    background-color: ${theme.color.background};
  `}
`;

const LinkText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.primary};
  `}
`;

export { getFixedCustomStyle, LogoText, NavLink, LinkText };
