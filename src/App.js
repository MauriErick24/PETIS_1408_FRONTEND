import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Content from './components/Content'
import Content2 from './components/Content2'

// views
import Home from './views/home'
import CreacionEvento from './views/creacion-evento'
import CreacionEventoData from './views/creacion-evento-data'
import Visualizacionevento from './views/visualizacion-evento'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Content />}>
          <Route index element={<Home />} />
          <Route path='creacion/evento' element={<CreacionEvento />} />
          <Route path='creacion/data' element={<CreacionEventoData />} />
          
        </Route>
        <Route path='' element={<Content2 />}>
        <Route path='visualizacion/evento' element={<Visualizacionevento />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
