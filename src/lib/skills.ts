import * as fs from 'fs';
import * as yaml from 'js-yaml';

export type Skill = {
  name: string;
  href: string;
  imgSrc: string;
};

export const getSkills = (): {
  languages: Skill[];
  frameworks: Skill[];
  rdb_nosql: Skill[];
  ci_cd: Skill[];
  other: Skill[];

} => {
  const body = fs.readFileSync('./src/config.yml');
  const config = yaml.load(body);
  return config.skills;
};
