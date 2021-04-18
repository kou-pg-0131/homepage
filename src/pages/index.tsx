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

  const socials = [
    {
      href: 'https://github.com/kou-pg-0131',
      name: 'GitHub',
      imgSrc: '/images/socials/github.svg',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/kou_pg_0131',
      imgSrc: '/images/socials/twitter.svg',
    },
    {
      name: 'Zenn',
      href: 'https://zenn.dev/kou_pg_0131',
      imgSrc: '/images/socials/zenn.svg',
    },
    {
      name: 'Gmail',
      href: 'mailto:kou.pg.0131@gmail.com',
      imgSrc: '/images/socials/gmail.svg',
    },
  ];

  return (
    <Layout>
      <Section>
        <User name='Koki Sato' imgSrc='/images/profile.png'/>
        <SocialList items={socials}/>
      </Section>

      <Divider id='skills'/>

      <Section title='Skills'>
        {config.skills.map(item => (
          <React.Fragment key={item.category}>
            <h3 className={classes.category}>{item.category}</h3>
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
        {config.portfolios.map(portfolio => (
          <React.Fragment key={portfolio.category}>
            <h3 className={classes.category}>{portfolio.category}</h3>
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
