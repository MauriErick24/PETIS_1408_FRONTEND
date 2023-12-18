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
import Confirm from "../../components/Confirm";
import Alert from "../../components/Alert";


import Spinner from '../../components/Spinner'
import api from '../../services/api'
import axios from 'axios'
import Title from "../../components/Fonts/Title";

const EliminarAuspiciador = ({showEditar, showEliminar}) => {
    
    // const [data, setData] = useState([{
    //     id:1,
    //     nombre_evento:"",
    //     tipo_evento:{
    //         nombreTipo_evento:""
    //     }
    // }]);

    const [data, setData] = useState([
      { id: 1, nombre: 'Auspiciador 1', correo: 'auspiciador1@example.com' },
      { id: 2, nombre: 'Juan 2', correo: 'auspiciador2@example.com' },
      { id: 3, nombre: 'Marcos 3', correo: 'auspiciador3@example.com' },

    ])

    // const [data2, setData2] = useState({});
    const [showConfirm, setConfirm] = useState(false)
    const [showAlert, setAlert] = useState(false)
    const [loading, setLoading] = useState(true);

    const [idToDelete, setIdToDelete] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await api.get('api/auspiciadores');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false); 
          }
        };
      
        fetchData();
      }, []); 

    
      
      
    const deleteElement = async(idToDelete) => {
        try {
            const response = await api.delete(`api/auspiciadores/${idToDelete}`)
            setData(data.filter(item => item.id !== idToDelete));
            setAlert(true)
        } catch (error) {
            console.log(error)
            setIdToDelete(null)
            alert("Sucedio un error inesperado al borrar el auspciador")
            setConfirm(false)
        }
        // setData(data.filter(item => item.id !== idToDelete));
    }

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = data.filter(elemento =>
        elemento.nombre.toLowerCase().startsWith(searchTerm.toLowerCase())
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
                    
            <Flex justify-content='center' flex-direction='column' align-items='center' text-align='center'>
               <Title>ELIMINAR AUSPICIADOR</Title> 
                {/* <P>*Todos los eventos que sean eliminados no se podran recuperar</P> */}
            </Flex>

            <Confirm
                title='¿ESTA SEGURO QUE DESEA BORRAR?'
                message='Esta accion no se puede revertir'
                show={showConfirm}
                onClose={() => {
                    setConfirm(false)
                    setIdToDelete(null)
                    }}
                onAcept={() => {
                    deleteElement(idToDelete)
                    setIdToDelete(null)
                    setConfirm(false)
                 }}
            />

            <Alert
                show={showAlert}
                onAcept={() => {
                    setAlert(false)
                    
                }}
                message="Se ha borrado el auspiciador"
            />

            <div className="crud-container text-center" >
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>TELEFONO</th>
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
                                <Td>{elemento.nombre}</Td>
                                <Td>{elemento.telefono}</Td>
                                {/* <td>{elemento.Telefono}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.AddresFavorite}</td> */}
                                <Td>
                                    
                               <Flex justify-content='center'>
                                <Btn onClick={()=> {
                                            setConfirm(true)
                                            setIdToDelete(elemento.id)
                                                }}color="second" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faTrashCan} />
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
export default EliminarAuspiciador;

const P = styled.p`
    color:red;
    font-size:25px;
`
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