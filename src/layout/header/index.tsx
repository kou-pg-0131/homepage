import React, { useState } from 'react';
import styles from './index.module.scss';
import { Avatar, Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { AnchorLink } from '../../components';

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
              <li className={styles.menuItem}><AnchorLink to='skills'>Skills</AnchorLink></li>
              <li className={styles.menuItem}><AnchorLink to='portfolios'>Portfolios</AnchorLink></li>
              <li className={styles.menuItem}><AnchorLink to='history'>History</AnchorLink></li>
            </ul>
          </Hidden>
          <Hidden smUp>
            <div>
              <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
            </div>
            <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
              <List className={styles.sideMenu}>
                <AnchorLink to='skills'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>Skills</ListItem></AnchorLink>
                <Divider/>
                <AnchorLink to='portfolios'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>Portfolios</ListItem></AnchorLink>
                <Divider/>
                <AnchorLink to='history'><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>History</ListItem></AnchorLink>
                <Divider/>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
