import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Componentes/Main'
import InfoPelis from './Componentes/InfoPelis'

function App() {

  return (
    <div className="App">
      <h1>Buscador de peliculas</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/peliculas/:id' element={<InfoPelis />}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
