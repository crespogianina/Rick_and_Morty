import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { changeAccess } from "./redux/actions";

function App() {
  const URL_BASE = "http://localhost:3001/rickandmorty/character"
  const EMAIL = "crespogianina98@gmail.com";
  const PASSWORD = "password3";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
 
  const dispatch = useDispatch();
  const state = useSelector((state) => state.access)
  

  const onSearch = (id) => {
    if (characters && characters.find((char) => char.id === +id)) {
      return alert("Ese personaje ya se encuentra en el Home");
    }

    axios(`${URL_BASE}/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  //* EJEMPLO MIO DE COMO HACER CON LOCATION
  // const HandleLocation = () => {
  //    if(location.pathname !== '/') return <Nav onSearch={onSearch} />;
  //    return null;
  // }

  const login = (userData) => {
    if (EMAIL === userData.email && PASSWORD === userData.password) {
      dispatch(changeAccess())
      navigate("/home");
    } else {
      alert("Ocurrió un error");
    }
  };

  useEffect(() => {
    !state && navigate("/");
  }, [state]);

  const searchRandom = () => {
    let id = Math.floor(Math.random() * 800);

    if (characters.length && characters.find((char) => char.id === id)) {
      alert("Ese personaje ya se encuentra en el Home");
    } else {
      axios(`${URL_BASE}/${id}`).then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    }
  };

  return (
    <div className="App">
      {/* {HandleLocation()} */}
      {/* {pathname !== '/' && pathname !== '/home' && pathname !== '/about' && <Error /> } */}
      {pathname !== "/" && (
        <Nav onSearch={onSearch} searchRandom={searchRandom} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
