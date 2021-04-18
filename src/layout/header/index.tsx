import React, { useState } from 'react';
import Link from 'next/link';
import { Avatar, Divider, Drawer, Hidden, Container, AppBar, Toolbar, IconButton, List, ListItem } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { AnchorLink } from '../../components';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'rgba(255, 255, 255, 0.9) !important',
    },
    toolbar: {
      height: 80,
    },
    title: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
    },
    titleLogo: {
      marginRight: 8,
    },
    titleText: {
      color: '#000000',
      fontSize: 18,
      marginBottom: 0,
    },
    menu: {
      display: 'flex',
    },
    menuItem: {
      margin: '0 8px',
      transition: '0.2s',
      '&:hover': {
        opacity: 0.5,
      },
    },
    sideMenu: {
      padding: '0 !important',
      width: 200,
    },
    sideMenuItem: {
      padding: '20px !important',
    },
  }),
);

type Props = {
  hideMenu: boolean;
};

export const Header: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

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
    <AppBar className={classes.root}>
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Avatar className={classes.titleLogo} src='/images/profile.png'/>
            <Link href='/'>
              <a className={classes.titleText}>Koki Sato</a>
            </Link>
          </div>
          {!props.hideMenu && (
            <React.Fragment>
              <Hidden xsDown>
                <ul className={classes.menu}>
                  {menuItems.map(item => (
                    <li key={item.to} className={classes.menuItem}><AnchorLink to={item.to}>{item.text}</AnchorLink></li>
                  ))}
                </ul>
              </Hidden>
              <Hidden smUp>
                <div>
                  <IconButton onClick={handleClickHamburger}><Menu/></IconButton>
                </div>
                <Drawer anchor='right' open={openSideMenu} onClose={handleCloseSideMenu}>
                  <List className={classes.sideMenu}>
                    {menuItems.map(item => (
                      <React.Fragment key={item.to}>
                        <AnchorLink to={item.to}><ListItem className={`${classes.menuItem} ${classes.sideMenuItem}`} onClick={handleClickSideMenuItem}>{item.text}</ListItem></AnchorLink>
                        <Divider/>
                      </React.Fragment>
                    ))}
                  </List>
                </Drawer>
              </Hidden>
            </React.Fragment>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
