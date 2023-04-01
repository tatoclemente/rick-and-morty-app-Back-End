import React, { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'
import ROUTE from './helpers/routes.helpers'
// import StyleCard from './Apps.module.css'
import { Routes, Route } from 'react-router-dom' 

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) =>{ 

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            let repetidos = characters.find((char) => char.id === data.id)
            if(!repetidos){
              setCharacters((oldChars) => [...oldChars, data]);
            }else {
              // IdRepeat();
              
              window.alert('ID repetido, prueba con otro ID');
            }
            
          } else {
                // NoId();
              window.alert('No hay personajes con ese ID');
          }
        });
  }

  const randomSearch = () => {
    const idRandom = Math.floor(Math.random()*827)
    onSearch(idRandom)

  }
  const onClose = (id) => {
    const filtered = characters.filter(char => char.id !== id );
    setCharacters(filtered)
  }

  return (
    <div className='App'>
      
      <NavBar 
      characters={characters}
      setCharacters={setCharacters}
      onSearch= {onSearch}
      randomSearch={randomSearch} />

      <Routes>
      
          <Route path={ROUTE.HOME}element={
          <Cards
          characters={characters}
          onClose={onClose} />
          } />
      
        

        <Route path={ROUTE.ABOUT} element={<About />} />
        <Route path={`${ROUTE.DETAIL}/:detailId` }element={<Detail />
        } />
      </Routes>
      
    </div>
  )
}

export default App
