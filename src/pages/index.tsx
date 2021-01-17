import React from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '../layout';
import { Section, Skills, User } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Skill, getSkills } from '../lib/skills';

const socials = [
  {
    href: 'https://github.com/kou-pg-0131',
    icon: <FontAwesomeIcon icon={faGithubSquare}/>,
  },
  {
    href: 'https://twitter.com/kou_pg_0131',
    icon: <FontAwesomeIcon icon={faTwitterSquare}/>,
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
        <Skills skills={props.skills}/>
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
