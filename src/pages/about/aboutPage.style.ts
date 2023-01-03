import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY } from 'styles/css';
import { convertPxToRem } from 'styles/util';
import { FlexBox, Text } from 'components';
import {
  SKILL_NAME_FONT_SIZE_DEFAULT,
  SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX,
} from 'pages/about/aboutPage.constant';
import { UNDERLINE_BOTTOM_CORRECTION_VALUE } from 'components/@shared/UnderlineText/UnderlineText.constant';

const mountFadeInAnimationStyle = css`
  transition: 0.8s;
`;

const skillNameTextStyle = css`
  font-size: ${convertPxToRem(SKILL_NAME_FONT_SIZE_DEFAULT)}rem;
  font-weight: 700;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: ${convertPxToRem(SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX)}rem;
  }
`;

const skillNameUnderlineStyle = css`
  bottom: ${SKILL_NAME_FONT_SIZE_DEFAULT / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    bottom: ${SKILL_NAME_FONT_SIZE_TABLET_HORIZONTAL_MAX / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;
  }
`;

const PageWrapper = styled.div`
  font-family: GmarketSans, sans-serif;
`;

const SectionWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 64px); // 100vh - [height of Header]
    background-color: ${theme.color.secondary};
  `}
`;

const SectionTitle = styled(Text)`
  font-size: 3rem;
  font-weight: 700;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(Text)`
  font-size: 1rem;
  font-weight: 500;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 0.875rem;
  }
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

const SkillsSectionWrapper = styled(SectionWrapper)`
  padding: 40px 90px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    padding: 40px 20px;
  }
`;

const SkillsSectionInnerWrapper = styled(FlexBox)`
  ${({ theme }) => css`
    min-height: 100%;
    padding: 30px 50px;
    background-color: ${theme.color.background};
    border: 0.5px solid ${theme.color.primary};
    border-radius: 10px;

    @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
      padding: 30px 20px;
    }
  `}
`;

const SkillContainer = styled(FlexBox)`
  margin-top: 35px;
`;

const SkillDescriptionItem = styled(Text)`
  position: relative;
  font-size: 1rem;
  padding: 3px 0 3px 1rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    width: 1rem;
  }

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 0.875rem;
  }
`;

export {
  mountFadeInAnimationStyle,
  skillNameTextStyle,
  skillNameUnderlineStyle,
  PageWrapper,
  SectionWrapper,
  SectionTitle,
  SectionDescription,
  IntroductionMainText,
  IntroductionSubText,
  ContactLinkWrapper,
  ContactLink,
  SkillsSectionWrapper,
  SkillsSectionInnerWrapper,
  SkillContainer,
  SkillDescriptionItem,
};
