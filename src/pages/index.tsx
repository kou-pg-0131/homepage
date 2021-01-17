import React from 'react';
import Layout from '../layout';
import { Section, Skills, User } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

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

const skills = {
  languages: [
    {
      name: 'Go',
      imgSrc: '/images/skills/go.svg',
      href: 'https://golang.org',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/skills/ruby.svg',
      href: 'https://www.ruby-lang.org/ja/',
    },
    {
      name: 'TypeScript',
      imgSrc: '/images/skills/typescript.svg',
      href: 'https://www.typescriptlang.org/',
    },
    {
      name: 'JavaScript',
      imgSrc: '/images/skills/javascript.svg',
      href: 'https://developer.mozilla.org/ja/docs/Web/JavaScript',
    },
    {
      name: 'HTML',
      imgSrc: '/images/skills/html.svg',
      href: 'https://developer.mozilla.org/ja/docs/Web/HTML',
    },
    {
      name: 'CSS',
      imgSrc: '/images/skills/css.svg',
      href: 'https://developer.mozilla.org/ja/docs/Web/CSS',
    },
  ],
};

const Home: React.FC = () => {
  return (
    <Layout>
      <Section>
        <User socials={socials}/>
      </Section>

      <Section title='Skills'>
        <Skills languages={skills.languages}/>
      </Section>
    </Layout>
  );
};

export default Home;
