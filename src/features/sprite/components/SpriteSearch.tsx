import React from 'react';
import { useSearchSpritesQuery } from '../../../services/spriteApi';

const SpriteSearch = () => {
  const { data, error, isLoading } = useSearchSpritesQuery();
  // const { data, error, isLoading } = useGetSpriteByNameQuery('player');

  let result: JSX.Element | null = <div>No result</div>;

  if (data) {
    result = (
      <>
        {data.map((spriteSheet) => (
          <div data-testid="spritesheet-item">{spriteSheet.name}</div>
        ))}
      </>
    );
  }

  console.log(data, error, isLoading);
  return <div>{result}</div>;
};

export default SpriteSearch;
