import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Social } from '../domain';
import { ExternalLink } from '.';

const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      margin: '0 12px',
    },
    img: {
      height: 40,
      width: 40,
    },
  }),
);

type Props = {
  social: Social;
};

export const SocialListItem: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <ExternalLink href={props.social.href}>
        <img className={classes.img} src={props.social.imgSrc} alt={props.social.name}/>
      </ExternalLink>
    </li>
  );
};
