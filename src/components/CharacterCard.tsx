import React from 'react';
import { Card, Avatar } from '@nextui-org/react';

interface CharacterCardProps {
  character: {
    image: string;
    name: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card>
      <Avatar src={character.image} alt={character.name} />
      <p>{character.name}</p>
    </Card>
  );
};

export default CharacterCard;
