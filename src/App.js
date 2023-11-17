import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Content from './components/Content'

// views
import Home from './views/home'
import CreacionEvento from './views/creacion-evento'
import CreacionEventoData from './views/creacion-evento-data'
import Perfil from './views/perfil'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Content />}>
          <Route index element={<Home />} />
          <Route path='creacion/evento' element={<CreacionEvento />} />
          <Route path='creacion/data' element={<CreacionEventoData />} />
          <Route path='perfil' element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
