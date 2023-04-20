import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({characters,onClose}) {
   return (
   <div className={style.conteiner}>
      {characters.map((character) => {
         return <Card id={character.id}
                      key={character.id}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      gender={character.gender}
                      origin={character.origin}
                      image={character.image}
                      onClose={onClose} 
                 />
      })}
   </div>
   );
}
