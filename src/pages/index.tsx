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
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
    },
    {
      name: 'Ruby',
      imgSrc: '/images/ruby.svg',
      href: 'https://example.com',
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
        <Skills items={skills}/>
      </Section>
    </Layout>
  );
};

export default Home;
