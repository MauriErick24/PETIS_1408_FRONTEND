import React, { useState, useEffect } from 'react';
import '../assets/css/Organizadorn.css';
import api from '../services/api'


const library = [
  { nombre: "Carrera de Informatica", author: "F. Scott Fitzgerald", year: 1925, publisher: "Charles Scribner's Sons", origin: "EE. UU." },
  { nombre: "MEMI", author: "Harper Lee", year: 1960, publisher: "J. B. Lippincott & Co.", origin: "EE. UU." },
  { nombre: "JALA SOFT", author: "George Orwell", year: 1949, publisher: "Secker & Warburg", origin: "Reino Unido" },
  { nombre:"UMSA - Informatica",author: "Jorge Ledezma", year:1980, publisher:"Diamond", origin: 'bosnia'},
  { nombre:"Univ. Gabriel Rene Moreno",author:"cervantes", year: 1965, publisher: "pinguin", origin: 'Spain'},
  { nombre:"Ministerio de Educacion",author:"victor hugo", year: 1976,publisher:'mcrgraw', origin:'France'},
  { nombre:"Embajada suiza",author:"nemilville", year: 1985,publisher:'Dolmen', origin:'USA'},
  { nombre:"Fundacion Bankia",author:"Cesar Ldzm", year: 1945, publisher:"majos", origin:'Peru'},
  { nombre:"Cuadros&CIA", author: "maarisabel", year:1965, publisher:"Trico", origin:'Spain'},
  { nombre:"Alcaldia de CB", author:'Nicolas cano', year:1965, publisher:'Friends', origin:'UK'},
];

function Organizadorn() {
  const [organizador,setOrganizador]=useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await api.get('/api/organizadores')
        setOrganizador(response.data)
        console.log(response.data)
      }catch(err){
        console.log("Error: ", err)
      }
    }
  fetchData();
  }, []);

  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [filteredLibrary, setFilteredLibrary] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectBook = (book) => {
    if (!selectedBooks.some(selectedBook => selectedBook.title === book.title) && selectedBooks.length < 5) {
      setSelectedBooks([...selectedBooks, book]);
    //setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleRemoveBook = (book) => {
    setSelectedBooks(selectedBooks.filter(selectedBook => selectedBook !== book));
  };

  const handleGoToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const query = searchInput.toLowerCase();
    const filteredBooks = organizador.filter(book => book.nombre.toLowerCase().startsWith(query));
    //console.log(organizador);
    setFilteredLibrary(filteredBooks);
    const totalResults = filteredBooks.length;
    setTotalPages(Math.ceil(totalResults / resultsPerPage));
  }, [searchInput, currentPage]);

  return (
    <div>
      <h2>Lista de Organizadores</h2>
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="Buscar organizador..."
      />
      <div id="results">
        {filteredLibrary
          .slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage)
          .map((book) => (
            <li key={book.nombre} onClick={() => handleSelectBook(book)}>
               <p>{book.nombre}</p>
            </li>
          ))}
      </div>


      <div id="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index + 1} onClick={() => handleGoToPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <h2>Organizadores Seleccionados</h2>
      <ul id="selectedBooks">
        {selectedBooks.map((book) => (
          <li key={book.nombre}>
            {book.nombre} (Institucion: {book.representante}, Telefono: {book.telefono})
            <button onClick={() => handleRemoveBook(book)} className="delete-button">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Organizadorn;