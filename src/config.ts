import { Skill } from './domain';

type Config = {
  skills: {
    category: string;
    items: Skill[];
  }[];
};

const config: Config = {
  skills: [
    {
      category: 'Languages',
      items: [
        Skill.go,
        Skill.ruby,
        Skill.nodejs,
        Skill.typescript,
        Skill.javascript,
        Skill.vbdotnet,
        Skill.html,
        Skill.css,
        Skill.sass,
      ],
    },
    {
      category: 'Frameworks',
      items: [
        Skill.gin,
        Skill.rails,
        Skill.react,
        Skill.nextjs,
        Skill.jekyll,
        Skill.dotnet,
      ],
    },
    {
      category: 'RDB/NoSQL',
      items: [
        Skill.mysql,
        Skill.postgresql,
        Skill.redis,
      ],
    },
    {
      category: 'Cloud',
      items: [
        Skill.aws,
        Skill.gcp,
        Skill.vercel,
      ],
    },
    {
      category: 'CI/CD',
      items: [
        Skill.circleci,
        Skill.githubactions,
        Skill.jenkins,
      ],
    },
    {
      category: 'Other',
      items: [
        Skill.docker,
        Skill.serverless,
        Skill.ansible,
        Skill.terraform,
        Skill.webpack,
        Skill.gulp,
        Skill.swagger,
        Skill.packer,
        Skill.materialui,
        Skill.bootstrap,
        Skill.jquery,
      ],
    },
  ],
};

export default config;
