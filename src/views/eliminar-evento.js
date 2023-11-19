import React, { useState } from "react";
import '../assets/css/Crud.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";
import Btn from "../components/Btn";
import HeaderTitle from "../components/HeaderTitle";
import Flex from "../components/Flex";

const EditarEvento = ({showEditar, showEliminar}) => {
    const data = [
        {id:1,Personaje: 'Naruto jorge ledezma ', Anime: 'Naruto jorge ledezma',Telefono: 1234456887, email: 'jorge@mail.com', Address: 'Calle 1',AddresFavorite:'Blue Navy'},
        {id:2,Personaje: 'Goku', Anime: 'Dragon Ball',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'red'},
        {id:3,Personaje: 'Luffy', Anime: 'One Piece',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Aqua'},
        {id:4,Personaje: 'Tanjiro', Anime: 'Kimetsu no Yaiba',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'salmon'},
        {id:5,Personaje: 'Eren', Anime: 'Shingeki no Kyojin',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Pink'},
        {id:6,Personaje: 'Kenshin', Anime: 'Rurouni Kenshin',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        {id:7,Personaje: 'Edward', Anime: 'Full Metal Alchemist',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        {id:8,Personaje: 'Yusuke', Anime: 'Yu Yu Hakusho',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        {id:9,Personaje: 'Seiya', Anime: 'Caballeros del Zodiaco',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        {id:10,Personaje: 'Ichigo', Anime: 'Bleach',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        {id:11,Personaje: 'Gon', Anime: 'Hunter x Hunter',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'}
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = data.filter(elemento =>
        elemento.Personaje.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Resetear la página al cambiar el término de búsqueda
    };

    return (
        <>
             <Flex justify-content='center' >
                <HeaderTitle title='ELIMINAR EVENTOS' /> 
            </Flex>

            <div className="crud-container text-center" >
                <input
                    type="text"
                    placeholder="Buscar por personaje"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Personaje</th>
                            <th>Anime</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.id}</td>
                                <td>{elemento.Personaje}</td>
                                <td>{elemento.Anime}</td>
                                <td>{elemento.Telefono}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.AddresFavorite}</td>
                                <td>
                                    
                                    {showEditar && (<Btn color="primary" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Btn>)}

                                    
                                    {showEliminar && (<Btn color="second" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </Btn>)}
                                    
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination mt-3">
                    <button disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>&lt;</button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} className={i + 1 === currentPage ? "active" : ""} onClick={() => handleClick(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                    <button disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>&gt;</button>
                </div>
            </div>
        </>
    );
}
export default EditarEvento;

const Button = styled.button``