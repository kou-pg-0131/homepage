import React from 'react';
import styles from './index.module.scss';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { Section, SkillCardList, User, ExternalLink, Icon } from '../components';
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
        <h3 className={styles.category}>Web Services</h3>
        <div>
          <ExternalLink href='https://nojov.kou-pg.com'>
            <h4 className={styles.itemTitle}>
              Nojov - プログラミング言語別求人数ビューア
              <Icon name='external-link'/>
            </h4>
          </ExternalLink>
          <ExternalLink href='https://nojov.kou-pg.com'>
            <img className={styles.itemImg} src="/images/portfolios/nojov.png" alt="Nojov - プログラミング言語別求人数ビューア"/>
          </ExternalLink>
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
