import React from 'react';
import { SpriteTile } from './SpriteTile';

interface SpriteTileProps {
  src: string;
  tile: SpriteTile;
}

const SpriteTileElement = ({ src, tile }: SpriteTileProps) => {
  const { indexX, indexY, width, height } = tile;
  const x = indexX * width;
  const y = indexY * height;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundPosition: `-${x}px -${y}px`,
        backgroundImage: `url("${src}")`,
        border: '1px solid blue',
      }}
    ></div>
  );
};

export default SpriteTileElement;
