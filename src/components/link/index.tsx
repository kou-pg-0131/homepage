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
      spy
      activeClass='active'
      to={props.to}
      offset={-80}
      duration={500}
    >
      {props.children}
    </ScrollLink>
  );
};
