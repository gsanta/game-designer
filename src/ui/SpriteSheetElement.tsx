import React from 'react';
import { SpriteSheet } from '../features/sprite/SpriteSheet';
import SpriteTileElement from '../features/sprite/SpriteTileElement';

const SpriteSheetElement = () => {
  const sheet: SpriteSheet = {
    name: 'player',
    tileWidth: 64,
    tileHeight: 64,
    columns: 22,
    tiles: 45,
    src: 'sprites/player.png',
  };

  const { columns, tiles, src, tileWidth, tileHeight } = sheet;

  const spriteTiles: JSX.Element[] = [];

  let currentRow = 0;
  let currentCol = 0;
  for (let i = 0; i < tiles; i++) {
    spriteTiles.push(
      <SpriteTileElement
        src={src}
        tile={{ indexX: currentCol, indexY: currentRow, width: tileWidth, height: tileHeight }}
      />,
    );

    if (currentCol === columns - 1) {
      currentCol = 0;
      currentRow += 1;
    } else {
      currentCol += 1;
    }
  }

  return <div>{spriteTiles}</div>;
};

export default SpriteSheetElement;
