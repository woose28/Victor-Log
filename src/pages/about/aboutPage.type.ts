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

export { Skill, SkillItemProps, TechExperience, TechExperienceItemProps };
