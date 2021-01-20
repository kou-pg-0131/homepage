import React from 'react';
import styles from './index.module.scss';
import { History } from '../../domain';
import { Card, CardContent } from '@material-ui/core';
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@material-ui/lab';

type Props = {
  active?: boolean;
  hideConnector?: boolean;
  history: History;
};

export const HistoryListItem: React.FC<Props> = (props: Props) => {

  return (
    <TimelineItem className={styles.item}>
      <TimelineSeparator>
        <TimelineDot
          color={props.active ? 'secondary' : undefined}
          variant={props.active ? undefined : 'outlined'}
        />
        {!props.hideConnector && (
          <TimelineConnector/>
        )}
      </TimelineSeparator>
      <TimelineContent className={styles.timelineContent}>
        <Card>
          <CardContent>
            <p className={styles.period}>{props.history.period}</p>
            <h3 className={styles.title}>{props.history.title}</h3>
            {props.history.description && (
              <p className={styles.description}>{props.history.description}</p>
            )}
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};
