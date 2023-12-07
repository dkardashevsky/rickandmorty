import React from 'react';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

const App: React.FC = () => {
  // Ваш код

  return (
    <>
      <div>
        {/* Ваши логотипы и элементы */}
      </div>
      <h1>Rick and Morty kek</h1>
      <div className="card">
        {/* Пример использования ваших компонентов */}
        <CharacterList />
        <CharacterCard character={/* pass character data here */} />
      </div>
      {/* Другие элементы вашего приложения */}
    </>
  );
};

export default App;
