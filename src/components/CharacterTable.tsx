// components/CharacterTable.tsx

import React, { useEffect, useState } from 'react';
import { useCharacters } from '../services/api';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
}

const CharacterTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: characters, isLoading, error } = useCharacters(currentPage);

  useEffect(() => {
    if (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }, [error]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (characters && characters.info && currentPage < characters.info.pages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !characters || !characters.results) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Image</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Species</th>
            <th style={tableHeaderStyle}>Type</th>
            <th style={tableHeaderStyle}>Gender</th>
            <th style={tableHeaderStyle}>Origin</th>
            <th style={tableHeaderStyle}>Location</th>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Created</th>
          </tr>
        </thead>
        <tbody>
          {characters.results.map((character: Character) => (
            <tr key={character.id}>
              <td style={tableCellStyle}>{character.name}</td>
              <td style={tableCellStyle}>
                <img src={character.image} alt={character.name} style={{ width: '75px', height: '75px' }} />
              </td>
              <td style={tableCellStyle}>{character.status}</td>
              <td style={tableCellStyle}>{character.species}</td>
              <td style={tableCellStyle}>{character.type}</td>
              <td style={tableCellStyle}>{character.gender}</td>
              <td style={tableCellStyle}>
                <a href={character.origin.url}>{character.origin.name}</a>
              </td>
              <td style={tableCellStyle}>
                <a href={character.location.url}>{character.location.name}</a>
              </td>
              <td style={tableCellStyle}>
                <a href={character.url}>{character.url}</a>
              </td>
              <td style={tableCellStyle}>{character.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={!characters || currentPage === characters.info.pages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

export default CharacterTable;
