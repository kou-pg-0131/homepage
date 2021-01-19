import React, { useState } from 'react';
import styles from './index.module.scss';
import { Avatar, Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link } from '../../components';

export const Header: React.FC = () => {
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const handleClickSideMenuItem = () => {
    setOpenSideMenu(false);
  };

  const handleClickHamburger = () => {
    setOpenSideMenu(true);
  };

  const handleCloseSideMenu = () => {
    setOpenSideMenu(false);
  };

  return (
    <AppBar className={styles.root}>
      <Container maxWidth='md'>
        <Toolbar className={styles.toolbar}>
          <div className={styles.title}>
            <Avatar className={styles.titleLogo} src='/images/profile.png'/>
            <p className={styles.titleText}>
              Koki Sato
            </p>
          </div>

          <Hidden xsDown>
            <ul className={styles.menu}>
              <li className={styles.menuItem}><Link to='skills'>Skills</Link></li>
              <li className={styles.menuItem}><Link to='portfolios'>Portfolios</Link></li>
              <li className={styles.menuItem}><Link to='history'>History</Link></li>
            </ul>
          </Hidden>
          <Hidden smUp>
            <div>
              <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
            </div>
            <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
              <List className={styles.sideMenu}>
                <Link to='skills'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>Skills</ListItem></Link>
                <Divider/>
                <Link to='portfolios'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>Portfolios</ListItem></Link>
                <Divider/>
                <Link to='history'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>History</ListItem></Link>
                <Divider/>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
