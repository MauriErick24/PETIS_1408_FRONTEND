import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ButtonOk from './components/ButtonOk/ButtonOk';
import ButtonCancel from './components/ButtonCancel/ButtonCancel';
import Modals from './components/Modals/Modals';
const mostrarOk=()=>{
console.log("boton ok creado")
}
const mostrarCrear=()=>{
  console.log("boton ok creado")
  }
const mostrarCancel=()=>{
  console.log("boton cancelar")
  }
  
function App() {
  return (
    <div className="app-container">
      <header className="header">
        <Header />
      </header>

      <main className="content">
      <Modals informacionModal={"¿Esta seguro de crear evento?"} visibleCancelar={true}/>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
