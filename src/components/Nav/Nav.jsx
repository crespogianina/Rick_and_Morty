import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import style from './SearchBar.module.css'


export default function Nav ({onSearch, searchRandom}) {
    return (
        <nav className={style.navConteiner}>
            <div className={style.links}>
            <NavLink to='/about' ><button className={style.button}>About</button></NavLink>
            <NavLink to='/home'><button className={style.button} >Home</button></NavLink>
            <NavLink to='/favorites'><button className={style.button} >Favorites</button></NavLink>
            </div>
            <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch} searchRandom={searchRandom} />  
            </div>
        
        </nav>
    )
}