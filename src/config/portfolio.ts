import { Skill } from './skill';

export const Portfolio = {
  portfolio: {
    title: 'Koki Sato',
    description: 'このサイト。',
    imgSrc: '/images/portfolios/portfolio.png',
    url: 'https://kou-pg.com',
    githubUrl: 'https://github.com/kou-pg-0131/portfolio',
    skills: [
      // language
      Skill.nodejs,
      Skill.typescript,
      // framework/library
      Skill.react,
      Skill.nextjs,
      // cloud
      Skill.vercel,
      // ci/cd
      Skill.circleci,
      // other
      Skill.materialui,
    ],
  },
  nojov: {
    title: 'Nojov',
    description: 'プログラミング言語ごとの求人数の一覧をチャート形式で見ることができるサービス。',
    imgSrc: '/images/portfolios/nojov.png',
    url: 'https://nojov.kou-pg.com',
    githubUrl: 'https://github.com/kou-pg-0131/nojov',
    skills: [
      // language
      Skill.nodejs,
      Skill.typescript,
      // framework/library
      Skill.react,
      Skill.nextjs,
      // cloud
      Skill.aws,
      Skill.vercel,
      // ci/cd
      Skill.circleci,
      // other
      Skill.docker,
      Skill.serverless,
      Skill.terraform,
      Skill.webpack,
      Skill.materialui,
    ],
  },
  lgtmGenerator: {
    title: 'LGTM Generator',
    description: 'シンプルな LGTM 画像生成サービス。',
    imgSrc: '/images/portfolios/lgtm-generator.png',
    url: 'https://lgtm-generator.kou-pg.com',
    githubUrl: 'https://github.com/kou-pg-0131/lgtm-generator-ui',
    skills: [
      // language
      Skill.nodejs,
      Skill.typescript,
      Skill.go,
      // framework/library
      Skill.react,
      Skill.nextjs,
      Skill.gin,
      // cloud
      Skill.vercel,
      Skill.gcp,
      Skill.aws,
      // ci/cd
      Skill.circleci,
      // other
      Skill.docker,
      Skill.serverless,
      Skill.terraform,
      Skill.materialui,
    ],
  },
  qiitaLgtmRanking: {
    title: 'Qiita LGTM Ranking',
    description: 'Qiita の LGTM ランキング記事を毎日自動更新するシステム。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/qiita-lgtm-ranking',
    skills: [
      // language
      Skill.go,
      // framework/library
      // cloud
      Skill.aws,
      // ci/cd
      Skill.circleci,
      // other
      Skill.docker,
      Skill.serverless,
    ],
  },
} as const;

export type Portfolio = typeof Portfolio[keyof typeof Portfolio];

export const PortfolioGroup = {
  webService: {
    name: 'Web Service',
    portfolios: [
      Portfolio.portfolio,
      Portfolio.nojov,
      Portfolio.lgtmGenerator,
    ],
  },
  tool: {
    name: 'Tool',
    portfolios: [
      Portfolio.qiitaLgtmRanking,
    ],
  },
} as const;

export type PortfolioGroup = typeof PortfolioGroup[keyof typeof PortfolioGroup];
