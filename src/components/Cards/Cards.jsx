import Card from '../Card/Card';

export default function Cards({characters}) {
   return (
   <div>
      {characters.map((character) => {
         return <Card key={character.id}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      gender={character.gender}
                      origin={character.origin}
                      image={character.image}
                      onClose={character.onClose} 
                 />
      })}
   </div>
   );
}
