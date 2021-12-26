import React from 'react';
import { useGetSpriteByNameQuery } from '../services/spriteApi';

export const SidePanel = () => {
  const { data, error, isLoading } = useGetSpriteByNameQuery('bulbasaur');

  console.log(data, error, isLoading);

  return <div className="pane-content">Left Pane (resizeable)</div>;
};
