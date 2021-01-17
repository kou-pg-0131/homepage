import React from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
};

export const ExternalLink: React.FC<Props> = (props: Props) => {
  return (
    <a href={props.href} target='_blank' rel='noreferrer noopener'>
      {props.children}
    </a>
  );
};
