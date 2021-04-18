import React from 'react';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ExternalLink } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      flexDirection: 'column',
    },
    listItem: {
      fontSize: 12,
      marginBottom: 4,
      textAlign: 'center',
    },
    link: {
      transition: '0.2s',
      '&:hover': {
        opacity: 0.5,
      },
    },
  }),
);

export const Footer: React.VFC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <small>
        &copy;2021
      </small>
      <ul>
        <li className={classes.listItem}>
          <ExternalLink className={classes.link} href='https://github.com/kou-pg-0131/homepage'>View on GitHub</ExternalLink>
        </li>
        <li className={classes.listItem}>
          <Link href='/privacyPolicy'>
            <a className={classes.link} href='https://github.com/kou-pg-0131/homepage'>プライバシーポリシー</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
