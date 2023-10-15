import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <Header />
      </header>

      <main className="content">
        <div id='title-container'>
         
        </div>
        <div id='container'>
          <Home />
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
