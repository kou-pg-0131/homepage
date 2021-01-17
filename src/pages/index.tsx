import React from 'react';
import Layout from '../layout';
import { About, SocialList } from '../components';
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

const Home: React.FC = () => {
  return (
    <Layout>
      <section>
        <About/>
      </section>

      <section>
        <SocialList items={socialItems}/>
      </section>
    </Layout>
  );
};

export default Home;
