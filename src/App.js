import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Content from './components/Content'
import Content2 from './components/Content2'
import Layout from '../src/components/Layout'

// views
import Home from './views/home'
import CreacionEvento from './views/creacion-evento'
import CreacionEventoData from './views/creacion-evento-data'
import Visualizacionevento from './views/visualizacion-evento'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path='creacion/evento' element={<Layout><CreacionEvento /></Layout>} />
      <Route path='creacion/data' element={<Layout><CreacionEventoData /></Layout>} />
      <Route  path='visualizacion/evento' element={<Layout detail={true}><Visualizacionevento /></Layout>} />
    </Routes> 
    </BrowserRouter>
   
  );
  
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path='' element={<Content home={""}/>}>
  //         <Route index element={<Home />} />
  //         <Route path='creacion/evento' element={<CreacionEvento />} />
  //         <Route path='creacion/data' element={<CreacionEventoData />} />
  //         <Route path='visualizacion/evento' element={<Visualizacionevento />} />   
  //         <Route path='visualizacion/evento' element={<Visualizacionevento />} />  
  //       </Route>
       
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
