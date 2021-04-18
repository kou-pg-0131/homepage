import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(2),
    },
  }),
);

type Props = {
  children: React.ReactNode;
};

export const PortfolioCardList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={4}>
      {props.children}
    </Grid>
  );
};
