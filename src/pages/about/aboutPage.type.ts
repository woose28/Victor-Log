import { ReactElement } from 'react';
import { AvailableColor } from 'styles/type';

type Skill = {
  name: string;
  description: string[];
};

type SkillItemProps = Skill;

type TechExperience = {
  name: string;
  skills?: string[];
  description: string[];
};

type TechExperienceItemProps = TechExperience;

type ProjectLinkType = 'github' | 'website' | 'information' | 'download';

type ProjectLink = {
  type: ProjectLinkType;
  url: string;
};

type Project = {
  name: string;
  date: {
    start: string;
    end?: string;
  };
  description: string;
  skills: string[];
  experiences: string[];
  links: ProjectLink[];
  image: string;
  projectColor: AvailableColor;
};

type ProjectItemProps = Project;

type GetLinkIcon = (type: ProjectLinkType) => ReactElement;

type ProjectItemWrapperProps = Pick<ProjectItemProps, 'projectColor'>;

export {
  Skill,
  SkillItemProps,
  TechExperience,
  TechExperienceItemProps,
  Project,
  ProjectItemProps,
  GetLinkIcon,
  ProjectItemWrapperProps,
};
