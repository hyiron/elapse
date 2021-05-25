import React from 'react';
import { SpringProps, Spring } from './Spring';

export const Opacity: React.FC<SpringProps> = (props) => {
  const { from = {}, to = {}, ...rest } = props;
  from.opacity = 0;
  from.opacity = 1;

  return <Spring from={from} to={to} {...rest} />;
};
