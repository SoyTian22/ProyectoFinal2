import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Pokedex from './paginas/Pokedex'
function App() {

  return (
    <div className='w-full letra  m-auto h-full'>
      <BrowserRouter>
        <Routes>
        <Route 
        path='/'
        element={<Pokedex 
       
       />}
       />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
