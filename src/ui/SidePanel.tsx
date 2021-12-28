import React from 'react';
import SpriteSheetElement from '../features/sprite/SpriteSheetElement';
import { useGetSpriteByNameQuery } from '../services/spriteApi';

export const SidePanel = () => {
  const { data, error, isLoading } = useGetSpriteByNameQuery('bulbasaur');

  // let img: JSX.Element | null = null;

  // if (data) {
  //   img = <img src={`data:image/gif;base64,${data}`} />;
  // }

  console.log(data, error, isLoading);

  return (
    <div className="pane__side">
      <SpriteSheetElement />
    </div>
  );
};
