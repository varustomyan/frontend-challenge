import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { createContext, useState } from 'react';

export const LikeCatsContext = createContext()

function App() {

  const initialState = !!localStorage.loveCats ? JSON.parse( localStorage.loveCats) : []
  const [likeCats, setLikeCats] = useState(initialState)
  
  return (
    <LikeCatsContext.Provider value={{
      likeCats,
      setLikeCats,
  }}>
      <BrowserRouter>
      <button onClick={() => console.log(initialState)}>dvsvds</button>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter> 
    </LikeCatsContext.Provider>

  );
}

export default App;
