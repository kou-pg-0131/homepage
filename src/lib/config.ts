import * as fs from 'fs';
import * as yaml from 'js-yaml';

export type Config = {
  skills: {
    category: string;
    items: {
      name: string;
      imgSrc: string;
      href: string;
    }[];
  }[];
};

export const getConfig = (): Config => {
  const body = fs.readFileSync('./src/config.yml');
  return yaml.load(body);
};
