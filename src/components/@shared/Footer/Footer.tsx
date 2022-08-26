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
    padding: 1.875rem 2.5rem;
    background-color: ${theme.color.secondary};
  `}
`;
