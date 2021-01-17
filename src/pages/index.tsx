import React from 'react';
import Layout from '../layout';
import { About, SocialList, Section, Skills } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const socialItems = [
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
        <About/>
        <SocialList items={socialItems}/>
      </Section>

      <Section title='Skills'>
        <Skills items={skills}/>
      </Section>
    </Layout>
  );
};

export default Home;
