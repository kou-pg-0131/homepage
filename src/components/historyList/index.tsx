import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Timeline } from '@material-ui/lab';

const useStyles = makeStyles(() =>
  createStyles({
    timeline: {
      padding: 0,
    },
  }),
);

type Props = {
  children: React.ReactNode;
};

export const HistoryList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline} align='alternate'>
      {props.children}
    </Timeline>
  );
};
