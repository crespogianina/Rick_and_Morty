import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   
   return (
      <div className={style.conteiner}>
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <img src={image} alt='{name}' />
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
        <div className={style.text}>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
        </div>
      </div>
   );
}
