import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

type Props = {
  children: React.ReactNode;
};

export const SocialList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {props.children}
    </ul>
  );
};
