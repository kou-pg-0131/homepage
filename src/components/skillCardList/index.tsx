import React from 'react';
import { Grid } from '@material-ui/core';

type Props = {
  children: React.ReactNode;
};

export const SkillCardList: React.VFC<Props> = (props: Props) => {
  return (
    <Grid container spacing={2}>
      {props.children}
    </Grid>
  );
};
