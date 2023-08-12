import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background-color: ${theme.color.secondary};
    border-radius: 10px 0 0 10px;
  `}
`;

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 208px);
  padding: 20px 28px;
`;

const Title = styled.p`
  ${({ theme }) => css`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${theme.color.onSecondary};
  `}
`;

const Summary = styled.p`
  ${({ theme }) => css`
    width: 100%;
    max-height: 3rem;
    margin-top: 10px;

    font-size: 1rem;
    font-weight: 300;
    color: ${theme.color.onSecondary};

    overflow: hidden;
  `}
`;

const Date = styled.p`
  ${({ theme }) => css`
    align-self: flex-end;
    height: 1rem;
    margin-top: 5px;
    font-size: 0.75rem;
    color: ${theme.color.subText};
  `}
`;

export { Wrapper, PostInfoWrapper, Title, Summary, Date };
