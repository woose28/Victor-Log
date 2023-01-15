import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const TagItem = styled.li`
  ${({ theme }) => css`
    padding: 5px 18px;
    border-radius: 24px;
    background-color: ${theme.color.primary};
    font-size: 0.75rem;
    color: ${theme.color.onPrimary};
    text-align: center;
  `}
`;

export { Wrapper, TagItem };
