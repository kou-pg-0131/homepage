import { Social as SocialType } from '../domain';

export const Social: { [name:string]: SocialType } = {
  GitHub: {
    href: 'https://github.com/kou-pg-0131',
    name: 'GitHub',
    imgSrc: '/images/socials/github.svg',
  },
  Twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/kou_pg_0131',
    imgSrc: '/images/socials/twitter.svg',
  },
  Zenn: {
    name: 'Zenn',
    href: 'https://zenn.dev/kou_pg_0131',
    imgSrc: '/images/socials/zenn.svg',
  },
  Gmail: {
    name: 'Gmail',
    href: 'mailto:kou.pg.0131@gmail.com',
    imgSrc: '/images/socials/gmail.svg',
  },
} as const;

export type Social = typeof Social[keyof typeof Social];
