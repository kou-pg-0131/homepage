import React from 'react';
import styles from './index.module.scss';
import { Grid } from '@material-ui/core';

type Props = {
  children: React.ReactNode;
};

export const PortfolioCardList: React.VFC<Props> = (props: Props) => {
  return (
    <Grid container className={styles.root} spacing={4}>
      {props.children}
    </Grid>
  );
};
