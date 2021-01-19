import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { SocialList, SocialListItem, PortfolioCardList, Section, SkillCardList, SkillCardListItem, User } from '../components';
import { Divider } from '@material-ui/core';
import { Skill } from '../lib/skills';
import { getConfig } from '../lib/config';

type Props = {
  skills: {
    category: string;
    items: Skill[];
  }[];

  portfolios: {
    category: string;
    items: {
      title: string;
      description: string;
      imgSrc?: string;
      url?: string;
      githubUrl: string;
    }[];
  }[];
};

const Home: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Section>
        <User/>
        <SocialList>
          <SocialListItem
            href='https://github.com/kou-pg-0131'
            name='GitHub'
            imgSrc="/images/socials/github.svg"
          />
          <SocialListItem
            href='https://twitter.com/kou_pg_0131'
            name='Twitter'
            imgSrc="/images/socials/twitter.svg"
          />
          <SocialListItem
            href='https://zenn.dev/kou_pg_0131'
            name='Zenn'
            imgSrc="/images/socials/zenn.svg"
          />
          <SocialListItem
            href='mailto:kou.pg.0131@gmail.com'
            name='GMail'
            imgSrc="/images/socials/gmail.svg"
          />
        </SocialList>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {props.skills.map(item => (
          <React.Fragment key={item.category}>
            <h3 className={styles.category}>{item.category}</h3>
            <SkillCardList>
              {item.items.map(skill => (
                <SkillCardListItem
                  key={skill.name}
                  name={skill.name}
                  imgSrc={skill.imgSrc}
                  href={skill.href}
                />
              ))}
            </SkillCardList>
          </React.Fragment>
        ))}
      </Section>

      <Divider id='portfolios'/>

      <Section title='Portfolios'>
        {props.portfolios.map(portfolio => (
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
  const config = getConfig();

  return {
    props: {
      skills: config.skills,
      portfolios: config.portfolios,
    },
  };
};

export default Home;
