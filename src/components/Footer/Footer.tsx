import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Text } from 'components';
import { DISPLAY } from 'styles/css';

const Footer = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Text size={16} color={theme.color.onSecondary}>
        Victor
      </Text>
      <Text size={14} color={theme.color.subText}>
        © Victor. All Rights Reserved.
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.438rem;
    width: 100%;
    padding: 30px 50px;
    background-color: ${theme.color.secondary};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 30px 20px;
    }
  `}
`;
