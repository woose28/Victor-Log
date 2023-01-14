import { css, useTheme } from '@emotion/react';
import { useAboutPage } from 'pages/about/useAboutPage';
import { FullLayout } from 'layouts';
import {
  MountFadeInAnimation,
  ScrollFadeInAnimation,
  FloatingScrollButton,
  UnderlineText,
} from 'components';
import {
  EducationItemProps,
  ProjectItemProps,
  SkillItemProps,
  TechExperienceItemProps,
} from 'pages/about/aboutPage.type';
import * as Style from 'pages/about/aboutPage.style';
import { SKILLS, TECH_EXPERIENCES, PROJECTS, EDUCATION } from 'pages/about/aboutPage.constant';
import { useProjectItem } from 'pages/about/useProjectItem';

const {
  skillNameLargeTextStyle,
  skillNameLargeUnderlineStyle,
  skillNameSmallTextStyle,
  skillNameSmallUnderlineStyle,
  ...Styled
} = Style;

const AboutPage = () => {
  const { theme } = useAboutPage();

  return (
    <FullLayout
      headerBackgroundColor={theme.color.secondary}
      mainBackgroundColor={theme.color.secondary}
    >
      <Styled.PageWrapper>
        <IntroductionSection />
        <SkillsSection />
        <TechExperienceSection />
        <ProjectsSection />
        <EducationSection />
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
      <Styled.IntroductionMainText>Frontend Developer</Styled.IntroductionMainText>
      <Styled.IntroductionSubText>
        {`안녕하세요. `}
        <Styled.IntroductionSubText
          as="span"
          css={css`
            color: ${theme.color.primary};
          `}
        >
          이우승
        </Styled.IntroductionSubText>
        {`입니다.\n방문해 주셔서 감사합니다 :)`}
      </Styled.IntroductionSubText>
      <MountFadeInAnimation transition="0.8s">
        <Styled.ContactLinkWrapper>
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
  return (
    <Styled.SectionWrapper>
      <Styled.SkillsSectionInnerWrapper>
        <Styled.SectionTitle>Main Skills</Styled.SectionTitle>
        <Styled.SectionDescription>
          강점이 되며 꾸준히 학습하고 있는 기술들 입니다.
        </Styled.SectionDescription>
        <Styled.SkillContainer>
          {SKILLS.map((skill, index) => (
            <ScrollFadeInAnimation key={index}>
              <SkillItem {...skill} />
            </ScrollFadeInAnimation>
          ))}
        </Styled.SkillContainer>
      </Styled.SkillsSectionInnerWrapper>
    </Styled.SectionWrapper>
  );
};

const SkillItem = ({ name, description }: SkillItemProps) => {
  const theme = useTheme();

  return (
    <Styled.SkillItemWrapper>
      <UnderlineText
        customTextStyle={skillNameLargeTextStyle}
        customUnderlineStyle={skillNameLargeUnderlineStyle}
        textColor={theme.color.onBackground}
        underlineColor={theme.color.primary}
        underlineOpacity={0.5}
        underlineThickness={0.2}
      >
        {name}
      </UnderlineText>
      <Styled.SkillItemDescriptionContainer>
        {description.map((desc, index) => (
          <Styled.ListItemText key={index}>{desc}</Styled.ListItemText>
        ))}
      </Styled.SkillItemDescriptionContainer>
    </Styled.SkillItemWrapper>
  );
};

const TechExperienceSection = () => {
  return (
    <Styled.SectionWrapperFlex>
      <Styled.SectionTitle>Tech Experience</Styled.SectionTitle>
      <Styled.SkillsSectionInnerWrapper
        as="ul"
        css={css`
          gap: 30px;
        `}
      >
        {TECH_EXPERIENCES.map((experience, index) => (
          <ScrollFadeInAnimation key={index}>
            <TechExperienceItem {...experience} />
          </ScrollFadeInAnimation>
        ))}
      </Styled.SkillsSectionInnerWrapper>
    </Styled.SectionWrapperFlex>
  );
};

const TechExperienceItem = ({ name, skills, description }: TechExperienceItemProps) => {
  const theme = useTheme();

  return (
    <Styled.TechExperienceItemWrapper>
      <Styled.TechExperienceItemInfoWrapper>
        <Styled.TechExperienceItemName>{name}</Styled.TechExperienceItemName>
        <Styled.TechExperienceSkillContainer>
          {skills?.map((skill, index) => (
            <UnderlineText
              key={index}
              customTextStyle={skillNameSmallTextStyle}
              customUnderlineStyle={skillNameSmallUnderlineStyle}
              textColor={theme.color.onBackground}
              underlineColor={theme.color.primary}
              underlineOpacity={0.5}
              underlineThickness={0.2}
            >
              {skill}
            </UnderlineText>
          ))}
        </Styled.TechExperienceSkillContainer>
      </Styled.TechExperienceItemInfoWrapper>
      <Styled.TechExperienceDescriptionContainer>
        {description.map((desc, index) => (
          <Styled.ListItemText key={index}>{desc}</Styled.ListItemText>
        ))}
      </Styled.TechExperienceDescriptionContainer>
    </Styled.TechExperienceItemWrapper>
  );
};

const ProjectsSection = () => {
  return (
    <Styled.SectionWrapperFlex>
      <Styled.SectionTitle>Projects</Styled.SectionTitle>
      <Styled.ProjectContainer>
        {PROJECTS.map((project, index) => (
          <ScrollFadeInAnimation key={index}>
            <ProjectItem {...project} />
          </ScrollFadeInAnimation>
        ))}
      </Styled.ProjectContainer>
    </Styled.SectionWrapperFlex>
  );
};

const ProjectItem = ({
  name,
  date,
  description,
  skills,
  experiences,
  links,
  image,
  projectColor,
}: ProjectItemProps) => {
  const { theme, getLinkIcon } = useProjectItem();

  return (
    <Styled.ProjectItemWrapper projectColor={projectColor}>
      <Styled.ProjectItemInfoWrapper>
        <Styled.ListItemNameWrapper>
          <Styled.ListItemName>{name}</Styled.ListItemName>
          <Styled.ListItemSubText>
            {date.start} ~ {date.end}
          </Styled.ListItemSubText>
        </Styled.ListItemNameWrapper>
        <Styled.ListItemSubText
          css={css`
            margin-top: 10px;
          `}
        >
          {description}
        </Styled.ListItemSubText>
        <Styled.ProjectItemSkillContainer>
          {skills.map((skill, index) => (
            <li key={index}>
              <UnderlineText
                customTextStyle={skillNameSmallTextStyle}
                customUnderlineStyle={skillNameSmallUnderlineStyle}
                textColor={theme.color.onBackground}
                underlineColor={projectColor}
                underlineOpacity={0.5}
                underlineThickness={0.2}
              >
                {skill}
              </UnderlineText>
            </li>
          ))}
        </Styled.ProjectItemSkillContainer>
        <Styled.ListItemTextContainer as="ul">
          {experiences.map((experience, index) => (
            <Styled.ListItemText key={index}>{experience}</Styled.ListItemText>
          ))}
        </Styled.ListItemTextContainer>
        <Styled.ProjectItemLinkContainer>
          {links.map(({ type, url }, index) => (
            <li key={index}>
              <Styled.ProjectItemLinkItem href={url} target="_blank" referrerPolicy="no-referrer">
                {getLinkIcon(type)}
              </Styled.ProjectItemLinkItem>
            </li>
          ))}
        </Styled.ProjectItemLinkContainer>
      </Styled.ProjectItemInfoWrapper>
      <Styled.ProjectItemImage src={image} alt={`${name} 이미지`} />
    </Styled.ProjectItemWrapper>
  );
};

const EducationSection = () => {
  return (
    <Styled.SectionWrapperFlex>
      <Styled.SectionTitle>Education</Styled.SectionTitle>
      <Styled.EducationContainer>
        {EDUCATION.map((education, index) => (
          <ScrollFadeInAnimation key={index}>
            <EducationItem {...education} />
          </ScrollFadeInAnimation>
        ))}
      </Styled.EducationContainer>
    </Styled.SectionWrapperFlex>
  );
};

const EducationItem = ({ name, date, description, information }: EducationItemProps) => {
  const theme = useTheme();

  return (
    <Styled.EducationItemWrapper>
      <Styled.ListItemNameWrapper>
        <Styled.ListItemName>{name}</Styled.ListItemName>
        <Styled.ListItemSubText>
          {date.start} ~ {date.end}
        </Styled.ListItemSubText>
      </Styled.ListItemNameWrapper>
      {description && (
        <Styled.ListItemSubText
          css={css`
            margin-top: 10px;
          `}
        >
          {description}
        </Styled.ListItemSubText>
      )}
      <Styled.ListItemTextContainer
        as="ul"
        css={css`
          border-color: ${theme.color.primary};
        `}
      >
        {information.map((info, index) => (
          <Styled.ListItemText key={index}>{info}</Styled.ListItemText>
        ))}
      </Styled.ListItemTextContainer>
    </Styled.EducationItemWrapper>
  );
};
