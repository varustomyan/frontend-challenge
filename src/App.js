import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { createContext, useState } from 'react';
import { FavoriteCatsContext } from './components/context/Context';


function App() {

  const initialState = !!localStorage.likeCats ? JSON.parse( localStorage.likeCats) : [];
  
  const [favoriteCats, setFavoriteCats] = useState(initialState)

  return (
    <FavoriteCatsContext.Provider value={{
      favoriteCats,
      setFavoriteCats,
  }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter> 
    </FavoriteCatsContext.Provider>

  );
}

export default App;
