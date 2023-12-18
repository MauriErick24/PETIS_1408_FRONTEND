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
import Premios from './views/premio/crear-premios'
//import Invitados from './views/requisitos'
import Afiche from './views/afiche'
import Auspiciador from './views/auspiciador'
import GestionEvento from './views/gestion-evento'
import LayoutGeneric from './components/Layout/LayoutGeneric'

import CrearAuspiciador from './views/auspiciador/crear-auspiciador'
import CrearEvento from './views/evento/crear-evento'
import CrearOrganizador from './views/organizador/crear-organizador'
import EliminarAuspiciador from './views/auspiciador/eliminar-auspiciador'

import AgregarAfiche from './views/afiche/agregar-afiche'
import AgregarPremio from './views/premio/crear-premios'
import Aorganizador from './views/organizador/Aorganizador'
import AgregarActividades from './views/actividades/agregar-actividades'

import Comunicados from './views/comunidados/Comunicados'

import EliminarEvento from './views/evento/eliminar-evento'
import EliminarAfiche from './views/afiche/eliminar-afiche'

import EliminarPremio from './views/premio/eliminar-premios'
import EditarEvento from './views/evento/editar-evento'
import EditarAuspiciador from './views/auspiciador/editar-auspiciador'
import AgregarAuspiciador from './views/auspiciador/agregar-auspiciador'

//import ModalLayout from './components/Modals/ModalCrear'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/" element={<Layout><HomeUser /></Layout>} />
       
        <Route path='/crear/evento' element={<GestionEvento view={'crear'}><CrearEvento/></GestionEvento>}/>
        <Route path='/crear/auspiciador' element={<GestionEvento view={'crear'}><CrearAuspiciador/></GestionEvento>}/>
        <Route path='/crear/organizador' element={<GestionEvento view={'crear'}><CrearOrganizador/></GestionEvento>}/>

        {/* <Route path='/agregar/auspiciador' element={<GestionEvento view={'agregar'}><CrearOrganizador/></GestionEvento>}/> */}
        <Route path='/agregar/organizador' element={<GestionEvento view={'agregar'}><Aorganizador /></GestionEvento>}/>
        <Route path='/agregar/auspiciador' element={<GestionEvento view={'agregar'}><AgregarAuspiciador></AgregarAuspiciador></GestionEvento>}/>
        <Route path='/agregar/afiche' element={<GestionEvento view={'agregar'}><AgregarAfiche/></GestionEvento>}/>
        <Route path='/agregar/premios' element={<GestionEvento view={'agregar'}><AgregarPremio/></GestionEvento>}/>
        <Route path='/agregar/actividades' element={<GestionEvento view={'agregar'}><AgregarActividades/></GestionEvento>}/>
        <Route path='/agregar/comunicados' element={<GestionEvento view={'agregar'}><Comunicados /></GestionEvento>}/>

        <Route path='/editar/evento' element={<GestionEvento view={'editar'}><EditarEvento/></GestionEvento>}/>
        <Route path='/editar/auspiciador' element={<GestionEvento view={'editar'}><EditarAuspiciador/></GestionEvento>}/>
        <Route path='/editar/organizador' element={<GestionEvento view={'editar'}><CrearOrganizador/></GestionEvento>}/>
        <Route path='/editar/afiche' element={<GestionEvento view={'editar'}><CrearOrganizador/></GestionEvento>}/>
        <Route path='/editar/premios' element={<GestionEvento view={'editar'}><CrearOrganizador/></GestionEvento>}/>
        <Route path='/editar/actividades' element={<GestionEvento view={'editar'}><CrearOrganizador/></GestionEvento>}/>

        <Route path='/eliminar/evento' element={<GestionEvento view={'eliminar'}><EliminarEvento/></GestionEvento>}/>
        <Route path='/eliminar/auspiciador' element={<GestionEvento view={'eliminar'}><EliminarAuspiciador/></GestionEvento>}/>
        <Route path='/eliminar/organizador' element={<GestionEvento view={'eliminar'}><CrearOrganizador/></GestionEvento>}/>
        <Route path='/eliminar/afiche' element={<GestionEvento view={'eliminar'}><EliminarAfiche/></GestionEvento>}/>
        <Route path='/eliminar/premios' element={<GestionEvento view={'eliminar'}><EliminarPremio/></GestionEvento>}/>
        <Route path='/eliminar/actividades' element={<GestionEvento view={'eliminar'}><CrearOrganizador/></GestionEvento>}/>
        



        <Route path='/gestionar-eventos' element={<GestionEvento view={'crear'}/>}/>
        
        <Route path='/editar-eventos' element={<GestionEvento />}/>
        <Route path='/editar/evento/:id' element={<GestionEvento view={'editar'}><LayoutCreacion updateButton={true}/></GestionEvento>}/>
        <Route path='/gestionar' element={<LayoutGeneric/>}/>
        {/* <Route path='/eliminar/afiche' element={} */}



        
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
        {/* <Route  path='eventos' element={<Layout><HomeUser /></Layout>} /> */}
        <Route  path='agregar/afiche' element={<Layout><Afiche /></Layout>} />

        {/* <Route  path='crear/organizador' element={<Layout><Corganizador /></Layout>} /> */}
        
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
