import { useTheme } from '@emotion/react';
import { useAboutPage } from 'pages/about/useAboutPage';
import { FullLayout } from 'layouts';
import { MountFadeInAnimation, FloatingScrollButton, UnderlineText, FlexBox } from 'components';
import { SkillItemProps, TechExperienceItemProps } from 'pages/about/aboutPage.type';
import * as Style from 'pages/about/aboutPage.style';
import { SKILLS, TECH_EXPERIENCES } from 'pages/about/aboutPage.constant';

const {
  mountFadeInAnimationStyle,
  skillNameTextStyle,
  skillNameUnderlineStyle,
  techExperienceSkillNameTextStyle,
  techExperienceSkillNameUnderlineStyle,
  ...Styled
} = Style;

const AboutPage = () => {
  const { theme } = useAboutPage();

  return (
    <FullLayout
      headerBackgroundColor={theme.color.secondary}
      mainBackgroundColor={theme.color.secondary}
    >
      <Styled.PageWrapper as="a">
        <IntroductionSection />
        <SkillsSection />
        <TechExperienceSection />
        <Styled.SectionWrapper style={{ backgroundColor: theme.color.background }} />
        <Styled.SectionWrapper style={{ backgroundColor: theme.color.background }} />
        <Styled.SectionWrapper style={{ backgroundColor: theme.color.background }} />
        <FloatingScrollButton />
      </Styled.PageWrapper>
    </FullLayout>
  );
};

export default AboutPage;

export const Head = () => <title>Victor Log | 소개 페이지</title>;

const IntroductionSection = () => {
  const theme = useTheme();

  return (
    <Styled.SectionWrapper>
      <Styled.IntroductionMainText as="h1" color={theme.color.onSecondary}>
        Frontend Developer
      </Styled.IntroductionMainText>
      <Styled.IntroductionSubText as="p" color={theme.color.subText}>
        {`안녕하세요. `}
        <Styled.IntroductionSubText color={theme.color.primary}>이우승</Styled.IntroductionSubText>
        {`입니다.\n방문해 주셔서 감사합니다 :)`}
      </Styled.IntroductionSubText>
      <MountFadeInAnimation customStyle={mountFadeInAnimationStyle}>
        <Styled.ContactLinkWrapper justifyContent="center" gap="40px">
          <Styled.ContactLink
            href="https://github.com/woose28"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Github
          </Styled.ContactLink>
          <Styled.ContactLink href="mailto:dldntmd97@gmail.com">Mail</Styled.ContactLink>
          <Styled.ContactLink
            href="https://victor-log.vercel.app/post/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Blog
          </Styled.ContactLink>
        </Styled.ContactLinkWrapper>
      </MountFadeInAnimation>
    </Styled.SectionWrapper>
  );
};

const SkillsSection = () => {
  const theme = useTheme();

  return (
    <Styled.SkillsSectionWrapper>
      <Styled.SkillsSectionInnerWrapper flexDirection="column">
        <Styled.SectionTitle as="h2" color={theme.color.onBackground}>
          Main Skills
        </Styled.SectionTitle>
        <Styled.SectionDescription color={theme.color.subText}>
          강점이 되며 꾸준히 학습하고 있는 기술들 입니다.
        </Styled.SectionDescription>
        <Styled.SkillContainer as="ul" flexDirection="column" gap="35px">
          {SKILLS.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </Styled.SkillContainer>
      </Styled.SkillsSectionInnerWrapper>
    </Styled.SkillsSectionWrapper>
  );
};

const SkillItem = ({ name, description }: SkillItemProps) => {
  const theme = useTheme();

  return (
    <FlexBox as="li" flexDirection="column">
      <UnderlineText
        customTextStyle={skillNameTextStyle}
        customUnderlineStyle={skillNameUnderlineStyle}
        color={theme.color.onBackground}
        underlineColor={theme.color.primary}
        underlineOpacity={0.5}
        underlineThickness={0.2}
      >
        {name}
      </UnderlineText>
      <FlexBox as="ul" flexDirection="column">
        {description.map((desc, index) => (
          <Styled.ListItemText as="li" key={index} color={theme.color.onBackground}>
            {desc}
          </Styled.ListItemText>
        ))}
      </FlexBox>
    </FlexBox>
  );
};

const TechExperienceSection = () => {
  const theme = useTheme();

  return (
    <Styled.TechExperienceSectionWrapper>
      <Styled.SectionTitle color={theme.color.onBackground}>Tech Experience</Styled.SectionTitle>
      <FlexBox as="ul" flexDirection="column" gap="30px">
        {TECH_EXPERIENCES.map((experience, index) => (
          <TechExperienceItem key={index} {...experience} />
        ))}
      </FlexBox>
    </Styled.TechExperienceSectionWrapper>
  );
};

const TechExperienceItem = ({ name, skills, description }: TechExperienceItemProps) => {
  const theme = useTheme();

  return (
    <Styled.TechExperienceItemWrapper>
      <Styled.TechExperienceItemInfoWrapper>
        <Styled.TechExperienceItemName color={theme.color.onBackground}>
          {name}
        </Styled.TechExperienceItemName>
        <Styled.TechExperienceSkillContainer as="ul" flexDirection="column" alignItems="flex-end">
          {skills?.map((skill, index) => (
            <UnderlineText
              key={index}
              customTextStyle={techExperienceSkillNameTextStyle}
              customUnderlineStyle={techExperienceSkillNameUnderlineStyle}
              color={theme.color.onBackground}
              underlineColor={theme.color.primary}
              underlineOpacity={0.5}
              underlineThickness={0.2}
            >
              {skill}
            </UnderlineText>
          ))}
        </Styled.TechExperienceSkillContainer>
      </Styled.TechExperienceItemInfoWrapper>
      <Styled.TechExperienceDescriptionContainer as="ul" flexDirection="column">
        {description.map((desc, index) => (
          <Styled.ListItemText as="li" key={index} color={theme.color.onBackground}>
            {desc}
          </Styled.ListItemText>
        ))}
      </Styled.TechExperienceDescriptionContainer>
    </Styled.TechExperienceItemWrapper>
  );
};
