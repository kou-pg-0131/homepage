import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

type Props = {
  children: React.ReactNode;
  to: string;
};

export const Link: React.FC<Props> = (props: Props) => {
  return (
    <ScrollLink
      smooth
      to={props.to}
      duration={500}
    >
      {props.children}
    </ScrollLink>
  );
};
