import React from 'react';
import styles from './index.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <small>
        &copy;2021 koki sato
      </small>
    </footer>
  );
};
