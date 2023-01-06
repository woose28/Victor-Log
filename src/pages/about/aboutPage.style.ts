import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { DISPLAY } from 'styles/css';
import { convertPxToRem } from 'styles/util';
import { FlexBox, Text } from 'components';
import { ProjectItemWrapperProps } from 'pages/about/aboutPage.type';
import {
  UNDERLINE_FONT_SIZE_LARGE_DEFAULT,
  UNDERLINE_FONT_SIZE_LARGE_TABLET_HORIZONTAL_MAX,
  UNDERLINE_FONT_SIZE_SMALL_DEFAULT,
  UNDERLINE_FONT_SIZE_SMALL_TABLET_HORIZONTAL_MAX,
} from 'pages/about/aboutPage.constant';
import { UNDERLINE_BOTTOM_CORRECTION_VALUE } from 'components/@shared/UnderlineText/UnderlineText.constant';

const mountFadeInAnimationStyle = css`
  transition: 0.8s;
`;

const skillNameLargeTextStyle = css`
  font-size: ${convertPxToRem(UNDERLINE_FONT_SIZE_LARGE_DEFAULT)}rem;
  font-weight: 700;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: ${convertPxToRem(UNDERLINE_FONT_SIZE_LARGE_TABLET_HORIZONTAL_MAX)}rem;
  }
`;

const skillNameLargeUnderlineStyle = css`
  bottom: ${UNDERLINE_FONT_SIZE_LARGE_DEFAULT / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    bottom: ${UNDERLINE_FONT_SIZE_LARGE_TABLET_HORIZONTAL_MAX /
    UNDERLINE_BOTTOM_CORRECTION_VALUE}px;
  }
`;

const skillNameSmallTextStyle = css`
  font-size: ${convertPxToRem(UNDERLINE_FONT_SIZE_SMALL_DEFAULT)}rem;
  font-weight: 700;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: ${convertPxToRem(UNDERLINE_FONT_SIZE_SMALL_TABLET_HORIZONTAL_MAX)}rem;
  }
`;

const skillNameSmallUnderlineStyle = css`
  bottom: ${UNDERLINE_FONT_SIZE_SMALL_DEFAULT / UNDERLINE_BOTTOM_CORRECTION_VALUE}px;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    bottom: ${UNDERLINE_FONT_SIZE_SMALL_TABLET_HORIZONTAL_MAX /
    UNDERLINE_BOTTOM_CORRECTION_VALUE}px;
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

    padding: 40px 90px;

    @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
      padding: 40px 20px;
    }
  `}
`;

const SectionWrapperFlex = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
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

const ListItemText = styled.li`
  ${({ theme }) => css`
    position: relative;
    padding: 3px 0 3px 1rem;
    font-size: 1rem;
    color: ${theme.color.onBackground};

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      width: 1rem;
    }

    @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
      font-size: 0.875rem;
    }
  `}
`;

const TextBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background};
    border: 0.5px solid ${theme.color.primary};
    border-radius: 10px;
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

const TechExperienceItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    flex-direction: column;
    justify-content: none;
    align-items: center;
    gap: 10px;
  }
`;

const TechExperienceItemInfoWrapper = styled(FlexBox)`
  width: 20%;
  flex-direction: column;
  align-items: flex-end;

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    width: 100%;
    align-items: center;
  }
`;

const TechExperienceItemName = styled(Text)`
  font-size: 2rem;
  font-weight: 500;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 1.5rem;
  }
`;

const TechExperienceSkillContainer = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-end;

  @media all and (max-width: ${DISPLAY.TABLET_VERTICAL_MAX}) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
`;

const TechExperienceDescriptionContainer = styled(FlexBox)`
  width: 75%;
`;

const ProjectContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

const ProjectItemWrapper = styled.li<ProjectItemWrapperProps>`
  ${({ projectColor }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    flex-direction: row-reverse;

    color: ${projectColor};

    path {
      fill: ${projectColor};
    }

    border-color: ${projectColor};
  `}
`;

const ProjectItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ProjectItemNameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const ProjectItemName = styled.p`
  font-size: 2rem;
  font-weight: 700;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    font-size: 1.5rem;
  }
`;

const ProjectItemSubText = styled.p`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.color.subText};

    @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
      font-size: 0.875rem;
    }
  `}
`;

const ProjectItemSkillContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0 15px;
`;

const ProjectItemExperienceContainer = styled(TextBox)`
  margin-top: 15px;
  padding: 10px 5px;
  border-color: inherit;
`;

const ProjectItemLinkContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const ProjectItemLinkItem = styled.a`
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const ProjectItemImage = styled.img`
  align-self: center;
  width: 300px;
  aspect-ratio: 1;

  @media all and (max-width: ${DISPLAY.TABLET_HORIZONTAL_MAX}) {
    width: 200px;
  }
`;

export {
  mountFadeInAnimationStyle,
  skillNameLargeTextStyle,
  skillNameLargeUnderlineStyle,
  skillNameSmallTextStyle,
  skillNameSmallUnderlineStyle,
  PageWrapper,
  SectionWrapper,
  SectionWrapperFlex,
  SectionTitle,
  SectionDescription,
  ListItemText,
  IntroductionMainText,
  IntroductionSubText,
  ContactLinkWrapper,
  ContactLink,
  SkillsSectionInnerWrapper,
  SkillContainer,
  TechExperienceItemWrapper,
  TechExperienceItemInfoWrapper,
  TechExperienceItemName,
  TechExperienceSkillContainer,
  TechExperienceDescriptionContainer,
  ProjectContainer,
  ProjectItemWrapper,
  ProjectItemInfoWrapper,
  ProjectItemNameWrapper,
  ProjectItemName,
  ProjectItemSubText,
  ProjectItemSkillContainer,
  ProjectItemExperienceContainer,
  ProjectItemLinkContainer,
  ProjectItemLinkItem,
  ProjectItemImage,
};
