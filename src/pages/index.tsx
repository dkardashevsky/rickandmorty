// pages/index.tsx
import React from 'react';
import CharacterList from '../components/CharacterList';
import CharacterCard from '../components/CharacterCard';
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const HomePage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Rick and Morty Characters</h1>
        {/* ... остальной код ... */}
      </div>
    </QueryClientProvider>
  );
};

export default HomePage;
