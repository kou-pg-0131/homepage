import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      margin: theme.spacing(3),
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom :theme.spacing(2),
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
      {props.title && (
        <Typography className={classes.title}>
          {props.title}
        </Typography>
      )}
      <Container maxWidth='md'>
        {props.children}
      </Container>
    </section>
  );
};
