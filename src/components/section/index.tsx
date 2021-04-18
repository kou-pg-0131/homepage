import React from 'react';
import styles from './index.module.scss';
import { Container } from '@material-ui/core';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Section: React.VFC<Props> = (props: Props) => {
  return (
    <section className={styles.root}>
      <Container maxWidth='md'>
        {props.title && (
          <h2 className={styles.title}>{props.title}</h2>
        )}
        {props.children}
      </Container>
    </section>
  );
};
