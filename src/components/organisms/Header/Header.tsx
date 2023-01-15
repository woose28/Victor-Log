import { css, useTheme } from '@emotion/react';
import { HeaderProps } from './Header.type';
import * as Style from './Header.style';
import { Fixed } from 'components';
import { LAYER } from 'styles/css';

const { getFixedCustomStyle, ...Styled } = Style;

const Header = ({ backgroundColor }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Fixed
      layer={LAYER.HEADER}
      customStyle={[
        getFixedCustomStyle(theme),
        css`
          background-color: ${backgroundColor};
        `,
      ]}
    >
      <Styled.NavLink to="/post">
        <Styled.LogoText>VICTOR LOG</Styled.LogoText>
      </Styled.NavLink>
      <Styled.NavLink
        css={css`
          margin: 0 2.813rem 0 auto;
        `}
        to="/about"
      >
        <Styled.LinkText>About</Styled.LinkText>
      </Styled.NavLink>
      <Styled.NavLink to="/post">
        <Styled.LinkText>Post</Styled.LinkText>
      </Styled.NavLink>
    </Fixed>
  );
};

export default Header;
