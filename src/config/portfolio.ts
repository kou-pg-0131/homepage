import { Skill } from './skill';

export const Portfolio = {
  homepage: {
    title: 'Koki Sato',
    description: 'このサイト。',
    imgSrc: '/images/portfolios/homepage.png',
    url: 'https://kou-pg.com',
    githubUrl: 'https://github.com/kou-pg-0131/homepage',
    skills: [
      Skill.circleci,
      Skill.nodejs,
      Skill.typescript,
      Skill.materialui,
      Skill.nextjs,
      Skill.vercel,
      Skill.sass,
      Skill.react,
    ],
  },
  nojov: {
    title: 'Nojov',
    description: 'プログラミング言語ごとの求人数の一覧をチャート形式で見ることができるサービス。',
    imgSrc: '/images/portfolios/nojov.png',
    url: 'https://nojov.kou-pg.com',
    githubUrl: 'https://github.com/kou-pg-0131/nojov-ui',
    skills: [
      Skill.react,
      Skill.aws,
      Skill.circleci,
      Skill.nodejs,
      Skill.typescript,
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
      Skill.react,
      Skill.gcp,
      Skill.aws,
      Skill.circleci,
      Skill.nodejs,
      Skill.typescript,
      Skill.docker,
      Skill.serverless,
      Skill.terraform,
      Skill.webpack,
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
      Skill.go,
      Skill.aws,
      Skill.circleci,
      Skill.docker,
      Skill.serverless,
    ],
  },
  awsCostNotifier: {
    title: 'AWS Cost Notifier',
    description: 'AWS の月間費用を毎朝 Slack に通知するシステム。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/aws-cost-notifier',
    skills: [
      Skill.go,
      Skill.aws,
      Skill.circleci,
      Skill.docker,
      Skill.serverless,
    ],
  },
  circleEnv: {
    title: 'circleci-env',
    description: 'CircleCI プロジェクトの環境変数をローカルの .env で管理する CLI ツール。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/circleci-env',
    skills: [
      Skill.go,
      Skill.circleci,
      Skill.docker,
    ],
  },
  s3fzf: {
    title: 's3fzf',
    description: 'S3 のオブジェクトを fzf ライクに検索して操作することができる CLI ツール。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/s3fzf',
    skills: [
      Skill.go,
      Skill.circleci,
      Skill.aws,
      Skill.docker,
    ],
  },
  dockerTags: {
    title: 'docker-tags',
    description: '特定の Docker イメージのタグ一覧を取得して出力する CLI ツール。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/docker-tags',
    skills: [
      Skill.go,
      Skill.circleci,
      Skill.docker,
    ],
  },
  clientInfoViewer: {
    title: 'Client Info Viewer',
    description: 'IP アドレス、 Cookie 等のクライアント情報を表示する機能。',
    imgSrc: null,
    url: null,
    githubUrl: 'https://github.com/kou-pg-0131/client-info-viewer',
    skills: [
      Skill.circleci,
      Skill.materialui,
      Skill.webpack,
      Skill.typescript,
      Skill.react,
    ],
  },
} as const;

export type Portfolio = typeof Portfolio[keyof typeof Portfolio];

export const PortfolioGroup = {
  webService: {
    name: 'Web Service',
    portfolios: [
      Portfolio.homepage,
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
