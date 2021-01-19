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

  const menuItems = [
    { text: 'Skills', to: 'skills' },
    { text: 'Portfolios', to: 'portfolios' },
    { text: 'History', to: 'history' },
  ];

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
              {menuItems.map(item => (
                <li key={item.to} className={styles.menuItem}><AnchorLink to={item.to}>{item.text}</AnchorLink></li>
              ))}
            </ul>
          </Hidden>
          <Hidden smUp>
            <div>
              <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
            </div>
            <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
              <List className={styles.sideMenu}>
                {menuItems.map(item => (
                  <React.Fragment key={item.to}>
                    <AnchorLink to={item.to}><ListItem className={`${styles.menuItem} ${styles.sideMenuItem}`} onClick={handleClickSideMenuItem}>{item.text}</ListItem></AnchorLink>
                    <Divider/>
                  </React.Fragment>
                ))}
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
