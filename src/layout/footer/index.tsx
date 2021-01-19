import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { ExternalLink } from '../../components';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &copy;2021
      </small>
      <ul>
        <li className={styles.listItem}>
          <ExternalLink className={styles.link} href='https://github.com/kou-pg-0131/homepage'>View on GitHub</ExternalLink>
        </li>
        <li className={styles.listItem}>
          <Link href='/privacyPolicy'>
            <a className={styles.link} href='https://github.com/kou-pg-0131/homepage'>プライバシーポリシー</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
