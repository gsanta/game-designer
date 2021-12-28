import React, { useState } from 'react';
import { SpriteSheet } from './SpriteSheet';
import SpriteTileElement from './SpriteTileElement';

const SpriteSheetElement = () => {
  const [isOpen, setOpen] = useState(false);

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

  const spriteSheet = (
    <div
      className="sprites__spritesheet"
      style={{ backgroundImage: `url("${src}")` }}
      onClick={() => setOpen(!isOpen)}
    ></div>
  );

  return (
    <div className="sprites">
      {spriteSheet}
      {isOpen ? spriteTiles : null}
    </div>
  );
};

export default SpriteSheetElement;
