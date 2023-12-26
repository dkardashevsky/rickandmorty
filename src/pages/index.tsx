// pages/index.tsx
import React from 'react';
import CharacterTable from '../components/CharacterTable';
import { QueryClient, QueryClientProvider } from 'react-query';

const HomePage: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Rick and Morty Characters</h1>
        <CharacterTable />
      </div>
    </QueryClientProvider>
  );
};

export default HomePage;
