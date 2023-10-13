import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ButtonOk from './components/ButtonOk/ButtonOk';
import ButtonCancel from './components/ButtonCancel/ButtonCancel';

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
       <ButtonOk name={"CREAR EVENTO"}funcionOnClick={mostrarCrear}/>
       <ButtonOk name={"ACEPTAR"} funcionOnClick={mostrarOk}/>
       <ButtonCancel name={"CANCELAR"}funcionOnClick={mostrarCancel}/>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
