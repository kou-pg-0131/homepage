export type SkillGroup = {
  name: Readonly<string>;
  skills: Readonly<Skill[]>;
};

export type Skill = {
  name: Readonly<string>;
  imgSrc: Readonly<string>;
  href: Readonly<string>;
};
