import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY } from 'styles/css';
import { FlexBox, Text } from 'components';

const mountFadeInAnimationStyle = css`
  transition: 0.8s;
`;

const PageWrapper = styled.div`
  font-family: GmarketSans, sans-serif;
`;

const SectionWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 64px); // 100vh - [height of Header]
    background-color: ${theme.color.secondary};
  `}
`;

const IntroductionMainText = styled(Text)`
  margin-top: 25vh;
  font-size: 4.375rem;
  font-weight: 700;
  text-align: center;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 3rem;
  }
`;

const IntroductionSubText = styled(Text)`
  margin-top: 5px;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  white-space: pre-line;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const ContactLinkWrapper = styled(FlexBox)`
  margin-top: 60px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const ContactLink = styled.a`
  ${({ theme }) => css`
    width: 18.75rem;
    padding: 13px 0;
    background-color: ${theme.color.primary};
    border: 0.5px solid ${theme.color.primary};
    border-radius: 5px;
    font-weight: 500;
    font-family: GmarketSans, sans-serif;
    color: ${theme.color.secondary};
    text-align: center;
    text-decoration: none;

    transition-property: background-color, border;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    &:hover {
      background-color: ${theme.color.background};
      border: 0.5px solid ${theme.color.primary};
      color: ${theme.color.primary};
    }
  `}
`;

export {
  mountFadeInAnimationStyle,
  PageWrapper,
  SectionWrapper,
  IntroductionMainText,
  IntroductionSubText,
  ContactLinkWrapper,
  ContactLink,
};
