import { Skill } from '.';

export type Portfolio = {
  title: Readonly<string>;
  description: Readonly<string>;
  imgSrc?: Readonly<string>;
  url?: Readonly<string>;
  githubUrl: Readonly<string>;
  skills: Readonly<Skill[]>;
};
