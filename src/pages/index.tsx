import React from 'react';
import { Layout } from '../layout';
import { SocialList, PortfolioCardList, PortfolioCardListItem, Section, SkillCardList, SkillCardListItem, HistoryList, HistoryListItem, User } from '../components';
import { Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import config from '../config';

const useStyles = makeStyles(() =>
  createStyles({
    category: {
      fontSize: 16,
      textAlign: 'center',
    },
  }),
);

const Home: React.VFC = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList items={config.socials}/>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {config.skillGroups.map(group => (
          <React.Fragment key={group.name}>
            <h3 className={classes.category}>{group.name}</h3>
            <SkillCardList>
              {group.skills.map(skill => (
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
        {config.portfolioGroups.map(group => (
          <React.Fragment key={group.name}>
            <h3 className={classes.category}>{group.name}</h3>
            <PortfolioCardList>
              {group.portfolios.map(portfolio => (
                <PortfolioCardListItem
                  key={portfolio.title}
                  portfolio={portfolio}
                />
              ))}
            </PortfolioCardList>
          </React.Fragment>
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
