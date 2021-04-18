import { Skill } from '.';

export type PortfolioGroup = {
  name: Readonly<string>;
  portfolios: Readonly<Portfolio[]>;
};

export type Portfolio = {
  title: Readonly<string>;
  description: Readonly<string>;
  imgSrc?: Readonly<string>;
  url?: Readonly<string>;
  githubUrl: Readonly<string>;
  skills: Readonly<Skill[]>;
};
