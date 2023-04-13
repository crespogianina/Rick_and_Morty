import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';


export default function Nav ({onSearch, searchRandom}) {
    return (
        <div>
            <SearchBar onSearch={onSearch} searchRandom={searchRandom}/>
            <NavLink to='/about' ><button>About</button></NavLink>
            <NavLink to='/home'><button >Home</button></NavLink>
            <NavLink to='/favorites'><button>Favorites</button></NavLink>
        </div>
    )
}