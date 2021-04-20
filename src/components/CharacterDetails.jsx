import axios from 'axios';
import { useState, useEffect } from 'react';

function CharacterDetails(props) {
  const [character, setCharacter] = useState(null);

  const { characterName } = props.match.params;

  const loadCharacters = () => {
    axios.get('https://swapi.dev/api/people/').then((response) => {
      // récupérer sur response la liste des personnages
      const findCharacter = response.data.results.find(
        (character) => character.name === characterName
      );
      setCharacter(findCharacter);
    });
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  console.log(character);

  return (
    character && (
      <div className='CharacterDetails'>
        <h2>Name: {character.name}</h2>
        <p>Eye color : {character.eye_color}</p>
        <p>Height : {character.height}</p>
      </div>
    )
  );
}

export default CharacterDetails;
