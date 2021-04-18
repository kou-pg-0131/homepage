import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 22,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    user: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(2),
    },
    name: {
      marginBottom: 0,
    },
    img: {
      height: 150,
      width: 150,
    },
    tagline: {
      color: '#aaaaaa',
    },
  }),
);

type Props = {
  name: string;
  imgSrc: string;
};

export const User: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <img className={classes.img} src='/images/profile.png' alt={props.name}/>
        <p className={classes.name}>Koki Sato</p>
      </div>
      <p className={classes.tagline}>Developer</p>
    </div>
  );
};
