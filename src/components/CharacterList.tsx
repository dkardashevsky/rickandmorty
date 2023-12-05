// components/CharacterList.tsx
import React from 'react';
import { useCharacters } from '../services/api';

interface Character {
  id: number;
  name: string;
  // Добавь другие свойства персонажа, если они есть
}

const CharacterList: React.FC = () => {
  const { data: characters, isLoading, isError } = useCharacters();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching characters</p>;

  return (
    <ul>
      {characters.results.map((character: Character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;
