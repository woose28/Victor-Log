import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GetVariantStyles } from 'components/@shared/Button/Button.type';

const getVariantStyle: GetVariantStyles = (theme, variant) => {
  const variantStyles = {
    primary: css`
      background-color: ${theme.color.primary};
      border: 0.5px solid ${theme.color.primary};
      color: ${theme.color.secondary};

      &:hover {
        background-color: ${theme.color.background};
        border: 0.5px solid ${theme.color.primary};
        color: ${theme.color.primary};
      }
    `,
    secondary: css`
      background-color: ${theme.color.background};
      border: 0.5px solid ${theme.color.primary};
      color: ${theme.color.primary};

      &:hover {
        background-color: ${theme.color.primary};
        border: 0.5px solid ${theme.color.primary};
        color: ${theme.color.secondary};
      }
    `,
  };

  return variantStyles[variant];
};

const Wrapper = styled.button`
  width: 5rem;
  padding: 13px 0;
  border-radius: 5px;
  font-weight: 500;

  transition-property: background-color, border;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;

  cursor: pointer;
`;

export { getVariantStyle, Wrapper };
