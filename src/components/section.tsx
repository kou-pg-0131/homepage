import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      margin: '25px 0',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }),
);

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Section: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth='md'>
        {props.title && (
          <h2 className={classes.title}>{props.title}</h2>
        )}
        {props.children}
      </Container>
    </section>
  );
};
