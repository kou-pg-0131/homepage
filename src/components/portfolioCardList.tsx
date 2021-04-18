import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Avatar, Card, CardContent, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Portfolio, Skill } from '../domain';
import { ExternalLink } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginBottom: theme.spacing(2),
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
      textAlign: 'center',
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
      border: '1px solid #ddd !important',
      borderRadius: '50%',
    },
    avatar: {
      backgroundColor: '#fff',
      height: 25,
      width: 25,
    },
    avatarImg: {
      objectFit: 'fill',
    },
    content: {
      paddingTop: 0,
    },
    title: {
      fontSize: 22,
      margin: '7px 0',
    },
    description: {
      marginBottom: theme.spacing(2),
    },
  }),
);

type Props = {
  name: string;
  portfolios: Readonly<Portfolio[]>;
};

export const PortfolioCardList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.name}>{props.name}</Typography>
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
              <CardContent className={classes.content}>
                <h4 className={classes.title}>{portfolio.title}</h4>
                <AvatarGroup className={classes.avatarGroup} max={100}>
                  {(portfolio.skills as unknown as Skill[]).sort((a, b) => a.name < b.name ? -1 : 1).map(skill => (
                    <ExternalLink key={skill.name} className={classes.avatarLink} href={skill.href}>
                      <Avatar className={classes.avatar} imgProps={{ className: classes.avatarImg }} src={skill.imgSrc} alt={skill.name}/>
                    </ExternalLink>
                  ))}
                </AvatarGroup>
                <p>{portfolio.description}</p>
                <ExternalLink href={portfolio.githubUrl}>
                  View on GitHub
                </ExternalLink>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
