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

import Confirm from '../../components/Confirm'

import {useNavigate } from "react-router-dom";
import Title from "../../components/Fonts/Title";
import Alert from "../../components/Alert";

const EditarEvento = ({showEditar, showEliminar}) => {
    const navigate = useNavigate()

    const data2 = [{
        id:1,
        nombre_evento:"",
        tipo_evento:{
            nombreTipo_evento:""
        }
    }
        
    ];

    const [modalConfirmCancelar, setModalConfirmCancelar] = useState(false)
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
                    placeholder="Buscar Evento..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EVENTO</th>
                            <th>TIPO EVENTO</th>
                            {/* <th>Telefono</th>
                            <th>Email</th>
                            <th>Address</th> */}
                            <th>ACCIONES</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((elemento) => (
                            <tr key={elemento.id}>
                                <Td>{elemento.id}</Td>
                                <Td>{elemento.nombre_evento}</Td>
                                <Td>{elemento.tipo_evento.nombreTipo_evento}</Td>
                                {/* <td>{elemento.Telefono}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.AddresFavorite}</td> */}
                                <Td>

                                <Flex justify-content='center'>
                                     <Btn onClick={() => navigate(`/editar/evento/${elemento.id}`)}  color="second" style={{ fontSize: '1.25rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Btn>  
                                </Flex>    
                                                                
                                </Td>
                                
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

const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;
  max-width: 200px; 
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: normal;
    overflow: visible;
    text-overflow: initial;
  }
`