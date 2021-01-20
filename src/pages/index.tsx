import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { SocialList, SocialListItem, PortfolioCardList, PortfolioCardListItem, Section, SkillCardList, SkillCardListItem, HistoryList, HistoryListItem, User } from '../components';
import { Divider } from '@material-ui/core';
import { Config, getConfig } from '../lib/config';

type Props = {
  config: Config;
};

const Home: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList>
          {props.config.socials.map(social => (
            <SocialListItem
              key={social.name}
              social={social}
            />
          ))}
        </SocialList>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {props.config.skills.map(item => (
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
        {props.config.portfolios.map(portfolio => (
          <React.Fragment key={portfolio.category}>
            <h3 className={styles.category}>{portfolio.category}</h3>
            <PortfolioCardList>
              {portfolio.items.map(item => (
                <PortfolioCardListItem
                  key={item.title}
                  portfolio={item}
                />
              ))}
            </PortfolioCardList>
          </React.Fragment>
        ))}
      </Section>

      <Divider id='history'/>

      <Section title='History'>
        <HistoryList>
          {props.config.histories.map((history, i) => (
            <HistoryListItem
              key={history.title}
              active={i === 0}
              hideConnector={i === props.config.histories.length - 1}
              history={history}
            />
          ))}
        </HistoryList>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const config = getConfig();

  return {
    props: {
      config,
    },
  };
};

export default Home;
