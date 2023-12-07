// components/CharacterList.tsx
import React from 'react';
import { useCharacters } from '../services/api';
import CharacterCard from './CharacterCard';

const CharacterList: React.FC = () => {
  const { data: characters, isLoading, isError } = useCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching characters</p>;

  return (
    <div>
      {characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
