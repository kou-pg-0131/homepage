import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { Social, Skill, Portfolio } from '../domain';

export type Config = {
  socials: Social[];

  skills: {
    category: string;
    items: Skill[];
  }[];

  portfolios: {
    category: string;
    items: Portfolio[];
  }[];
};

export const getConfig = (): Config => {
  const body = fs.readFileSync('./src/config.yml');
  return yaml.load(body);
};
