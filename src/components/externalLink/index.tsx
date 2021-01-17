import React from 'react';

type Props = React.HTMLProps<HTMLAnchorElement>;

export const ExternalLink: React.FC<Props> = (props: Props) => {
  return (
    <a target='_blank' rel='noreferrer noopener' {...props}>
      {props.children}
    </a>
  );
};
