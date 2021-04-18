import React from 'react';
import { History } from '../domain';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    timelineItem: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row !important',
        '&::before': {
          flex: 0,
        },
      },
    },
    timelineContent: {
    },
    period: {
      fontSize: 12,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    title: {
      fontSize: 16,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left !important' as 'left',
      },
    },
    description: {
      fontSize: 14,
      textAlign: 'left !important' as 'left',
    },
  }),
);

type Props = {
  active?: boolean;
  hideConnector?: boolean;
  history: History;
};

export const HistoryListItem: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <TimelineItem className={classes.timelineItem}>
      <TimelineSeparator>
        <TimelineDot
          color={props.active ? 'secondary' : undefined}
          variant={props.active ? undefined : 'outlined'}
        />
        {!props.hideConnector && (
          <TimelineConnector/>
        )}
      </TimelineSeparator>
      <TimelineContent className={classes.timelineContent}>
        <Card>
          <CardContent>
            <p className={classes.period}>{props.history.period}</p>
            <h3 className={classes.title}>{props.history.title}</h3>
            {props.history.description && (
              <p className={classes.description}>{props.history.description}</p>
            )}
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};
