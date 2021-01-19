import * as fs from 'fs';
import * as yaml from 'js-yaml';

export type Skill = {
  name: string;
  href: string;
  imgSrc: string;
};

export const getSkills = (): {
  category: string;
  items: Skill[];
}[] => {
  const body = fs.readFileSync('./src/config.yml');
  const config = yaml.load(body);
  return config.skills;
};
