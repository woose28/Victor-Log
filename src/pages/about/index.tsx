import { useTheme } from '@emotion/react';
import { useAboutPage } from 'pages/about/useAboutPage';
import { FullLayout } from 'layouts';
import { MountFadeInAnimation, FloatingScrollButton } from 'components';
import * as Style from 'pages/about/aboutPage.style';

const { mountFadeInAnimationStyle, ...Styled } = Style;

const AboutPage = () => {
  const { theme } = useAboutPage();

  return (
    <FullLayout
      headerBackgroundColor={theme.color.secondary}
      mainBackgroundColor={theme.color.secondary}
    >
      <Styled.PageWrapper>
        <IntroductionSection />
        <Styled.SectionWrapper style={{ backgroundColor: theme.color.secondary }} />
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
      <Styled.IntroductionMainText as="p" color={theme.color.onSecondary}>
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
