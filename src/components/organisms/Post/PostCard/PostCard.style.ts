import Link from 'gatsby-link';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 266px;
    border-radius: 0.625rem 0.625rem 0 0;
    background-color: ${theme.color.secondary};
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  padding: 15px;
`;

const Title = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.onSecondary};
  `}
`;

const Date = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    margin-top: auto;
    color: ${theme.color.subText};
    font-size: 0.75rem;
  `}
`;

export { Wrapper, NavLink, PostInfoWrapper, Title, Date };
