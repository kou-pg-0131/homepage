import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Avatar, Card, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Portfolio } from '../domain';
import { ExternalLink } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(2),
    },
    description: {
      marginBottom: theme.spacing(1),
    },
    img: {
      height: 300,
      [theme.breakpoints.down('lg')]: {
        height: 280,
      },
      [theme.breakpoints.down('md')]: {
        height: 200,
      },
    },
    avatarGroup: {
      marginBottom: theme.spacing(2),
    },
    avatarLink: {
      border: '1px solid #ddd',
      borderRadius: '50%',
    },
    avatar: {
      backgroundColor: '#fff',
      height: 25,
      width: 25,
    },
    avatarImg: {
      height: '100%',
      objectFit: 'fill',
      width: '100%',
    },
    cardContent: {
      paddingTop: 0,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      margin: theme.spacing(1),
    },
  }),
);

type Props = {
  portfolios: Readonly<Portfolio[]>;
};

export const PortfolioCardList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={4}>
      {props.portfolios.map(portfolio => (
        <Grid key={portfolio.title} item xs={12}>
          <Card raised>
            {portfolio.imgSrc && portfolio.url && (
              <CardActionArea>
                <ExternalLink href={portfolio.url}>
                  <CardMedia
                    className={classes.img}
                    image={portfolio.imgSrc}
                  />
                </ExternalLink>
              </CardActionArea>
            )}

            <CardContent className={classes.cardContent}>
              <Typography className={classes.title}>{portfolio.title}</Typography>
              <AvatarGroup className={classes.avatarGroup} max={100}>
                {portfolio.skills.concat().sort((a, b) => a.name < b.name ? -1 : 1).map(skill => (
                  <ExternalLink key={skill.name} className={classes.avatarLink} href={skill.href}>
                    <Avatar className={classes.avatar} imgProps={{ className: classes.avatarImg }} src={skill.imgSrc} alt={skill.name}/>
                  </ExternalLink>
                ))}
              </AvatarGroup>
              <Typography className={classes.description}>{portfolio.description}</Typography>
              <ExternalLink href={portfolio.githubUrl}>
                View on GitHub
              </ExternalLink>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
