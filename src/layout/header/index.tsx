import React from 'react';
import styles from './index.module.scss';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from '../../components';

export const Header: React.FC = () => {
  return (
    <AppBar className={styles.root}>
      <Toolbar className={styles.toolbar}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}><Link to='skills'>Skills</Link></li>
          <li className={styles.menuItem}><Link to='portfolios'>Portfolios</Link></li>
          <li className={styles.menuItem}><Link to='history'>History</Link></li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
