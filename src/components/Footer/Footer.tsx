import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY } from 'styles/css';

const Footer = () => {
  return (
    <Wrapper>
      <NameText>Victor</NameText>
      <CopyRightText>© Victor. All Rights Reserved.</CopyRightText>
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

const NameText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.color.onSecondary};
  `}
`;

const CopyRightText = styled.p`
  ${({ theme }) => css`
    font-size: 0.875rem;
    color: ${theme.color.subText};
  `}
`;
