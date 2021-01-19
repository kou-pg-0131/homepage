import React, { useState } from 'react';
import styles from './index.module.scss';
import { Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
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
      <Toolbar className={styles.toolbar}>
        <Hidden xsDown>
          <Container maxWidth='md'>
            <ul className={styles.menu}>
              <li className={styles.menuItem}><Link to='skills'>Skills</Link></li>
              <li className={styles.menuItem}><Link to='portfolios'>Portfolios</Link></li>
              <li className={styles.menuItem}><Link to='history'>History</Link></li>
            </ul>
          </Container>
        </Hidden>
        <Hidden smUp>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
          </div>
          <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
            <List style={{ padding: 0 }}>
              <Link to='skills'><ListItem className={styles.menuItem} onClick={handleClickSideMenuItem} style={{ padding: 20 }}>Skills</ListItem></Link>
              <Divider/>
              <Link to='portfolios'><ListItem className={styles.menuItem} onClick={handleClickSideMenuItem} style={{ padding: 20 }}>Portfolios</ListItem></Link>
              <Divider/>
              <Link to='history'><ListItem className={styles.menuItem} onClick={handleClickSideMenuItem} style={{ padding: 20 }}>History</ListItem></Link>
              <Divider/>
            </List>
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
