import React from 'react';
import { About } from './about';
import { SocialList } from './socialList';

type Props = {
  socials: {
    href: string;
    icon: React.ReactNode;
  }[];
};

export const User: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <About/>
      <SocialList items={props.socials}/>
    </div>
  );
};
