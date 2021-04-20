import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterItem from './CharacterItem';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = () => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
      // récupérer sur response la liste des personnages
      setCharacters(response.data.results);
    });
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className='CharacterList'>
      {characters.map((character) => {
        return <CharacterItem key={character.id} name={character.name} />;
      })}
    </div>
  );
}

export default CharacterList;
