import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './hook/useAuth'

// components
import Content from './components/Content'

// views
import Home from './views/home'
import CreacionEvento from './views/creacion-evento'
import CreacionEventoData from './views/creacion-evento-data'
import Perfil from './views/perfil'

function App() {

  const { token } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {
            token ?
              // usuario logueado con token
              <Route path='' element={<Content />}>
                <Route index element={<Home />} />
                <Route path='creacion/evento' element={<CreacionEvento />} />
                <Route path='creacion/data' element={<CreacionEventoData />} />
                <Route path='perfil' element={<Perfil />} />
              </Route>
              :
              // sin token
              <Route path='' element={<Content />}>
                <Route index element={<Home />} />
              </Route>
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
