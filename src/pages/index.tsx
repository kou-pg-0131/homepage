import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { PortfolioCardList, Section, SkillCardList, User, Icon } from '../components';
import { Divider } from '@material-ui/core';
import { Skill, getSkills } from '../lib/skills';

const socials = [
  {
    href: 'https://github.com/kou-pg-0131',
    icon: <Icon name='github-square'/>,
  },
  {
    href: 'https://twitter.com/kou_pg_0131',
    icon: <Icon name='twitter-square'/>,
  },
];

const portfolios = [
  {
    category: 'Web Services',
    items: [
      {
        title: 'Nojov',
        description: 'プログラミング言語ごとの求人数を一覧で見ることができるサービスです。',
        imgSrc: '/images/portfolios/nojov.png',
        url: 'https://nojov.kou-pg.com',
        githubUrl: 'https://github.com/kou-pg-0131/nojov-ui',
      },
      {
        title: 'LGTM Generator',
        description: 'シンプルな LGTM 画像生成サービスです。',
        imgSrc: '/images/portfolios/lgtm-generator.png',
        url: 'https://lgtm-generator.kou-pg.com',
        githubUrl: 'https://github.com/kou-pg-0131/lgtm-generator-ui',
      },
    ],
  },
  {
    category: 'Tools',
    items: [
      {
        title: 'docker-tags',
        description: '特定の Docker イメージのタグ一覧を取得して出力する CLI ツールです。',
        githubUrl: 'https://github.com/kou-pg-0131/docker-tags',
      },
    ],
  },
];

type Props = {
  skills: {
    category: string;
    items: Skill[];
  }[];
};

const Home: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Section>
        <User socials={socials}/>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {props.skills.map(item => (
          <React.Fragment key={item.category}>
            <h3 className={styles.category}>{item.category}</h3>
            <SkillCardList items={item.items}/>
          </React.Fragment>
        ))}
      </Section>

      <Divider id='portfolios'/>

      <Section title='Portfolios'>
        {portfolios.map(portfolio => (
          <React.Fragment key={portfolio.category}>
            <h3 className={styles.category}>{portfolio.category}</h3>
            <PortfolioCardList portfolios={portfolio.items}/>
          </React.Fragment>
        ))}
      </Section>

      <Divider id='history'/>

      <Section title='History'>
        <div style={{ textAlign: 'center', color: 'red' }}>
          <strong>
            WIP
          </strong>
        </div>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills = getSkills();

  return {
    props: {
      skills,
    },
  };
};

export default Home;
