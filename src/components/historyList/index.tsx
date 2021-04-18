import React from 'react';
import styles from './index.module.scss';
import { Timeline } from '@material-ui/lab';

type Props = {
  children: React.ReactNode;
};

export const HistoryList: React.VFC<Props> = (props: Props) => {
  return (
    <Timeline className={styles.root} align='alternate'>
      {props.children}
    </Timeline>
  );
};
