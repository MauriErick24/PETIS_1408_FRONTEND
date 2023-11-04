import React, { useState } from 'react';
import '../assets/css/SearchBar.css'; 
import '../assets/css/SearchResult.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function SearchBar({label}) {
  const [query, setQuery] = useState(''); // Estado para almacenar la consulta de búsqueda
  const [results, setResults] = useState([]); // Estado para almacenar los resultados de búsqueda

  // Función para manejar cambios en el cuadro de búsqueda
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    // Aquí puedes realizar la búsqueda y actualizar el estado de los resultados
    // Por ejemplo, puedes llamar a una API para obtener resultados y luego actualizar setResults.
  };

  return (
    <div className="search-container">
      <label>{label}</label>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleSearchChange}
      />
      <button type="button" id="search-button"> <FontAwesomeIcon className= "fasearch" icon={faSearch} /> </button>
      {results.length > 0 && <SearchResults results={results} />}
    </div>
  );
}

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
