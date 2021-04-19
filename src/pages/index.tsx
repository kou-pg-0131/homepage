import React from 'react';
import { Layout } from '../layout';
import { SocialList, PortfolioCardList, Section, SkillCardList, HistoryList, HistoryListItem, User } from '../components';
import { Divider } from '@material-ui/core';
import config from '../config';

const Home: React.VFC = () => {
  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList items={config.socials}/>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {config.skillGroups.map(group => (
          <SkillCardList key={group.name} name={group.name} skills={group.skills}/>
        ))}
      </Section>

      <Divider id='portfolios'/>

      <Section title='Portfolios'>
        {config.portfolioGroups.map(group => (
          <PortfolioCardList key={group.name} name={group.name} portfolios={group.portfolios}/>
        ))}
      </Section>

      <Divider id='history'/>

      <Section title='History'>
        <HistoryList>
          {config.histories.map((history, i) => (
            <HistoryListItem
              key={history.title}
              active={i === 0}
              hideConnector={i === config.histories.length - 1}
              history={history}
            />
          ))}
        </HistoryList>
      </Section>
    </Layout>
  );
};

export default Home;
