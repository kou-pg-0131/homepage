import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { SocialList, SocialListItem, PortfolioCardList, Section, SkillCardList, SkillCardListItem, User } from '../components';
import { Divider } from '@material-ui/core';
import { Skill, Social, Portfolio } from '../domain';
import { getConfig } from '../lib/config';

type Props = {
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

const Home: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList>
          {props.socials.map(social => (
            <SocialListItem
              key={social.name}
              social={social}
            />
          ))}
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
                  skill={skill}
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
      socials: config.socials,
    },
  };
};

export default Home;
