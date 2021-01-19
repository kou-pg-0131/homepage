import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

type Props = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

export const AnchorLink: React.FC<Props> = (props: Props) => {
  return (
    <ScrollLink
      className={props.className}
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
