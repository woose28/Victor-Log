import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { FlexBox, Text } from 'components';

const Footer = () => {
  const theme = useTheme();

  return (
    <Wrapper flexDirection="column" gap="1.438rem">
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
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.875rem 3.125rem;
    background-color: ${theme.color.secondary};
  `}
`;
