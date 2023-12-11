import React, { useState ,useEffect} from "react";
import '../../assets/css/Crud.css'; 
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";
import Btn from "../../components/Btn";
import HeaderTitle from "../../components/HeaderTitle";
import Flex from "../../components/Flex";
import Spinner from '../../components/Spinner'
import api from '../../services/api'
import axios from 'axios'

import {useNavigate } from "react-router-dom";
import Title from "../../components/Fonts/Title";

const EditarEvento = ({showEditar, showEliminar}) => {
    const navigate = useNavigate()

    const data2 = [{
        id:1,
        nombre_evento:"",
        tipo_evento:{
            nombreTipo_evento:""
        }
    }
        // {id:1,Titulo: 'Naruto jorge ledezma ', Tipo: 'Naruto jorge ledezma',Telefono: 1234456887, email: 'jorge@mail.com', Address: 'Calle 1',AddresFavorite:'Blue Navy'},
        // {id:2,Titulo: 'Goku', Tipo: 'Dragon Ball',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'red'},
        // {id:3,Titulo: 'Luffy', Tipo: 'One Piece',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Aqua'},
        // {id:4,Titulo: 'Tanjiro', Tipo: 'Kimetsu no Yaiba',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'salmon'},
        // {id:5,Titulo: 'Eren', Tipo: 'Shingeki no Kyojin',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Pink'},
        // {id:6,Titulo: 'Kenshin', Tipo: 'Rurouni Kenshin',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        // {id:7,Titulo: 'Edward', Tipo: 'Full Metal Alchemist',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        // {id:8,Titulo: 'Yusuke', Tipo: 'Yu Yu Hakusho',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        // {id:9,Titulo: 'Seiya', Tipo: 'Caballeros del Zodiaco',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        // {id:10,Titulo: 'Ichigo', Tipo: 'Bleach',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'},
        // {id:11,Titulo: 'Gon', Tipo: 'Hunter x Hunter',Telefono: 1234, email: 'jorge@mail.com', AddresFavorite:'Blue Navy'}
    ];

    const [data, setData] = useState([
        {id:1,
        nombre_evento:"",
        tipo_evento:{
            nombreTipo_evento:""
        }
    }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await api.get('api/evento');
           //console.log(response.data);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false); 
          }
        };
      
        fetchData();
      }, []); 
      
      


    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = data.filter(elemento =>
        elemento.nombre_evento.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    return (
        <>
            {loading ? (
                <Spinner/>
                ) : (
                    <>
                    
                    <Flex justify-content='center' >
                
                <Title>EDITAR EVENTO</Title>
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
                            <th>Titulo</th>
                            <th>Tipo</th>
                            {/* <th>Telefono</th>
                            <th>Email</th>
                            <th>Address</th> */}
                            <th>Acciones</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre_evento}</td>
                                <td>{elemento.tipo_evento.nombreTipo_evento}</td>
                                {/* <td>{elemento.Telefono}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.AddresFavorite}</td> */}
                                <td>

                                <Flex justify-content='center'>
                                     <Btn onClick={() => navigate(`/editar/evento/${elemento.id}`)}  color="primary" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Btn>  
                                </Flex>    
                                                                
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Flex className="pagination mt-3" align-items='center' gap='0.4em'>
                    <Btn disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}>&lt;</Btn>
                    {[...Array(totalPages)].map((_, i) => (
                        <Btn key={i} className={i + 1 === currentPage ? "active" : ""} onClick={() => handleClick(i + 1)}>
                            {i + 1}
                        </Btn>
                    ))}
                    <Btn disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}>&gt;</Btn>
                </Flex>
            </div>
                    
                    </>
                )}
        
          
            
        </>
    );
}
export default EditarEvento;

const Button = styled.button``