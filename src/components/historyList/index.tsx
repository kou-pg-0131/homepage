import React from 'react';
import { Timeline } from '@material-ui/lab';

type Props = {
  children: React.ReactNode;
};

export const HistoryList: React.FC<Props> = (props: Props) => {
  return (
    <Timeline align='alternate'>
      {props.children}
    </Timeline>
  );
};
