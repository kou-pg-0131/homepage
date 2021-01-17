import React from 'react';
import styles from './socialList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const SocialList: React.FC = () => {
  return (
    <ul className={styles.socials}>
      <li className={styles.socials__item}>
        <a className={styles.socials__itemLink} href='https://github.com/kou-pg-0131' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithubSquare}/>
        </a>
      </li>
      <li className={styles.socials__item}>
        <a className={styles.socials__itemLink} href='https://twitter.com/kou_pg_0131' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitterSquare}/>
        </a>
      </li>
    </ul>
  );
};
