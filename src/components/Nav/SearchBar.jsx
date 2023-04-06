import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch, searchRandom}) {
   const [id,setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.nav}>
         <input className={style.input} type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={() => {onSearch(id)}} >Agregar</button>
         <button className={style.button} onClick={searchRandom}>Random</button>
      </div>
   );
}
