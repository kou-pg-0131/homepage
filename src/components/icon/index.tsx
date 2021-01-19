import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

type Props = {
  name: 'github-square' | 'twitter-square' | 'external-link';
};

export const Icon: React.FC<Props> = (props: Props) => {
  const icon = (() => {
    switch (props.name) {
      case 'github-square': return faGithubSquare;
      case 'twitter-square': return faTwitterSquare;
      case 'external-link': return faExternalLinkAlt;
    }
  })();

  return (
    <FontAwesomeIcon icon={icon}/>
  );
};
