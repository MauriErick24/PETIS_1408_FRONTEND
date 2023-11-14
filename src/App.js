import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
//import Content from './components/Content'
//import Content2 from './components/Content2'
import Layout from '../src/components/Layout'
import LayoutCreacion from '../src/components/Layout/Layout'
//import Aside from './components/Aside'
//import CrearEvento from './views/crear-evento'

// views
import Home from './views/home'
//import CreacionEvento from './views/creacion-evento'
//import CreacionEventoData from './views/creacion-evento-data'
import Visualizacionevento from './views/visualizacion-evento'
import HomeUser from './views/homeUser'
//import VentanaBotones from './views/VentanaBotones'


// import Organizador from './views/organizador';
//import Organizadorn from './views/Organizadorn'
// import Corganizador from './views/corganizador'; 
import Patrocinador from './views/patrocinador'
import Reglas from './views/reglas'
import Premios from './views/premios'
//import Invitados from './views/requisitos'
import Afiche from './views/afiche'
import Auspiciador from './views/auspiciador'

//import ModalLayout from './components/Modals/ModalCrear'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/" element={<Layout><Home /></Layout>} />
       
        <Route path='/crear/evento' element={<LayoutCreacion />}/>
        <Route path='/editar/evento/:id' element={<LayoutCreacion updateButton={true}/>}/>



        
{/*        
        <Route path='/crear/evento/organizador' element={<LayoutCreacion main={<Organizadorn/>}/>}/> 
        {/* <Route path='/crear/evento/organizador/corganizador' element={<LayoutCreacion main={<Corganizador/>}/>}/> */}
        
        {/* <Route path='/crear/evento/patrocinadores' element={<LayoutCreacion main={<Patrocinador/>}/>}/>
        <Route path='/crear/evento/reglas' 
        
        element={<LayoutCreacion main={<Reglas/>}/>}/>
        <Route path='/crear/evento/premios' element={<LayoutCreacion main={<Premios/>}/>}/>
        <Route path='/crear/evento/invitados' element={<LayoutCreacion main={<Invitados/>}/>}/>
        <Route path='/crear/evento/afiche' element={<LayoutCreacion main={<Afiche/>}/>}/>   */}
      



        {/* <Route path='creacion/evento' element={<Layout><CreacionEvento /></Layout>} />
        <Route path='creacion/data' element={<Layout><CreacionEventoData /></Layout>} /> */}
        <Route  path='visualizacion/evento' element={<Layout detail={true}><Visualizacionevento /></Layout>} />
        <Route  path='eventos/detalle/:id' element={<Layout detail={true}><Visualizacionevento /></Layout>} />
        <Route  path='eventos' element={<Layout><HomeUser /></Layout>} />
        {/* <Route  path='ventana/botones' element={<Layout><VentanaBotones /></Layout>} /> */}
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
