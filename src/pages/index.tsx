import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { Section, SkillCardList, User, Portfolios, Icon } from '../components';
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

      <Section title='Skills'>
        {props.skills.map(item => (
          <React.Fragment key={item.category}>
            <h3 className={styles.category}>{item.category}</h3>
            <SkillCardList items={item.items}/>
          </React.Fragment>
        ))}
      </Section>

      <Section title='Portfolios'>
        <Portfolios/>
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
