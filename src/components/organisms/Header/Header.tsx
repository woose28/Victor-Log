import { css, useTheme } from '@emotion/react';
import { HeaderProps } from './Header.type';
import * as Style from './Header.style';
import { Fixed } from 'components';
import { PATH } from 'constants/route';
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
      <Styled.NavLink to={PATH.POST}>
        <Styled.LogoText>VICTOR LOG</Styled.LogoText>
      </Styled.NavLink>
      <Styled.NavLink
        css={css`
          margin: 0 2.813rem 0 auto;
        `}
        to={PATH.ABOUT}
      >
        <Styled.LinkText>About</Styled.LinkText>
      </Styled.NavLink>
      <Styled.NavLink to={PATH.POST}>
        <Styled.LinkText>Post</Styled.LinkText>
      </Styled.NavLink>
    </Fixed>
  );
};

export default Header;
