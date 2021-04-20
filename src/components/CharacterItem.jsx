import { Link } from 'react-router-dom';

function CharacterItem(props) {
  const { name } = props;

  return (
    <div className='CharacterItem'>
      <span>{name} - </span>
      <Link to={`/characters/${name}`}>Details</Link>
    </div>
  );
}

export default CharacterItem;
