// services/api.tsx

import { useQuery } from 'react-query';

export const fetchCharacters = async (page: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return response.json();
};

export const useCharacters = (page: number) => {
  return useQuery(['characters', page], () => fetchCharacters(page));
};
