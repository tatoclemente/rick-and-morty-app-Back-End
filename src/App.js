import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error404/Error404";
import Form from "./components/Form/Form.jsx";
import Navesita from "./components/Navesita/navesita.jsx";
import Nave from "./assets/navesita.png";
import ROUTE from "./helpers/routes.helpers";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";

function App() {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const EMAIL = "tatoapuros@gmail.com";
  const PASSWORD = "Dni3566753";

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate(ROUTE.LOGIN);
  };
  console.log(access);
  useEffect(() => {
    if(!access) navigate(ROUTE.LOGIN)
  },[]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repetidos = characters.find((char) => char.id === data.id);
          if (!repetidos) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("ID repetido, prueba con otro ID");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const randomSearch = () => {
    const idRandom = Math.floor(Math.random() * 827);
    onSearch(idRandom);
  };
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  return (
    <div className="App">
      {location.pathname !== ROUTE.LOGIN && (
        <NavBar
          setCharacters={setCharacters}
          onSearch={onSearch}
          randomSearch={randomSearch}
          logout={logout}
        />
      )}

      {location.pathname === ROUTE.LOGIN? <Navesita img={Nave} /> : null}

      <Routes>
        <Route path={ROUTE.LOGIN} 
          element={<Form login={login} />} 
        />
        <Route
          path='/'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route 
          path={ROUTE.FAVORITES} 
          element={<Favorites 
          onClose={onClose}/>}
        />
        <Route 
          path={ROUTE.ABOUT} 
          element={<About />} 
        />
        <Route 
          path={`${ROUTE.DETAIL}/:detailId`} 
          element={<Detail />} 
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
