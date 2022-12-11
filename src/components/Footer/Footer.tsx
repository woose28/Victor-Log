import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { FlexBox, Text } from 'components';
import { DISPLAY } from 'styles/css';

const Footer = () => {
  const theme = useTheme();

  return (
    <Wrapper as="footer" flexDirection="column" gap="1.438rem">
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

const Wrapper = styled(FlexBox)`
  ${({ theme }) => css`
    width: 100%;
    padding: 30px 50px;
    background-color: ${theme.color.secondary};

    @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
      padding: 30px 20px;
    }
  `}
`;
