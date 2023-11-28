import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderTitle from "../components/HeaderTitle";
import Flex from "../components/Flex";
import Inputk from "../components/input/Inputk";
import Btn from "../components/Btn"
import SearchBar from "../components/Searchbar";
import Itemgen from "../components/Itemgen";
import api from '../services/api'
import '../assets/css/Organizadorn.css';
import Image from '../assets/images/example-img.jpg'
import Alert from '../components/Alert';
import ErrorMessage from "../components/ErrorMessage";

import Spinner from '../components/Spinner'

const Patrocinador = ({idEvento}) => {
    const [organizador,setOrganizador]= useState([
        {id:1, nombre:'coca cola'},
        {id:2, nombre:'san simon'},
        {id:3, nombre:'umss'},
    ])

  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false)
  const [showAlertError, setShowAlertError] = useState(false)


  useEffect(() => {
      const fetchData = async () => {
        try {
         const response = await api.get('/api/auspiciadores');
         setOrganizador(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); 
        }
      };
    
      fetchData();
    }, []); 




    const datos=[
        // {
        //     nombre:'coca cola'
        // },
        //   {
        //     nombre:'Lab Tech'
        // },  {
        //     nombre:'UMSS'
        // }
     ]

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
            if (!selectedBooks.some(selectedBook => selectedBook.nombre === book.nombre) && selectedBooks.length < 5) {
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

        const sendData = async() => {
            let selectedAuspiciador = []
            let dataToSend = {}

            selectedBooks.map((element) => (
                selectedAuspiciador.push(element.id)
            ))

            dataToSend = {idEvento, selectedAuspiciador}
            try {
                const response=await api.post('/api/auspiciadorEvent',dataToSend)
                console.log(response.data)
                setShowAlert(true) 
            } catch (error) {
                console.log(error)
            }
            console.log(dataToSend)
            setShowAlertError(true)
        }

    return(
        <>
        <Alert
               message="Los afiches seleccionados se han añadido correctamente al evento"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />  

            <Alert
               message="Ha sucedido un error inesperado al añadir afiches al evento"
               onAcept={()=>{setShowAlertError(false)}} 
               show={showAlertError}
            />       
           {loading ? (
            <Spinner/>
           )
           :
           (
            <>
            <Flex justify-content='center' margin-bottom= '2%'>
                <HeaderTitle title='AUSPICIADORES'/> 
              
            </Flex>
                <input
                type="text"
                value={searchInput}
                onChange={handleSearchInput}
                placeholder="Buscar auspiciador..."
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
                    <h2>Auspiciadores Seleccionados</h2>
                    <ul id="selectedBooks">
                        {selectedBooks.map((book) => (
                        <li key={book.nombre}>
                            {book.nombre} <Img src={book.logo}/>
                            <button onClick={() => handleRemoveBook(book)} className="delete-button">X</button>
                        </li>
                        ))}
                    </ul>
                <Flex justify-content='center' top='2em'>
                    <Btn onClick={()=>sendData()}>GUARDAR</Btn>
                </Flex>
            </>
           )
           }
        </>
    )
}
export default Patrocinador;

const Img=styled.img`
height:6%;
width:6%;
`