import React from 'react';
import styles from './index.module.scss';
import { ExternalLink } from '..';
import { Card, CardContent, CardActionArea, CardActions, Button, CardMedia } from '@material-ui/core';

type Props = {
  title: string;
  description: string;
  imgSrc?: string;
  url?: string;
  githubUrl: string;
};

export const PortfolioCard: React.FC<Props> = (props: Props) => {
  return (
    <Card>
      {props.imgSrc && props.url && (
        <CardActionArea>
          <ExternalLink href={props.url}>
            <CardMedia
              className={styles.img}
              image={props.imgSrc}
            />
          </ExternalLink>
        </CardActionArea>
      )}
      <CardContent className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p>{props.description}</p>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          href={props.githubUrl}
          target='_blank'
          rel='noreferrer noopener'
        >
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  );
};
