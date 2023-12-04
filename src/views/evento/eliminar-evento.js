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

const EliminarEvento = ({showEditar, showEliminar}) => {
    
    const [data, setData] = useState([{
        id:1,
        nombre_evento:"",
        tipo_evento:{
            nombreTipo_evento:""
        }
    }]);


    // const [data2, setData2] = useState({});
    const [showConfirm, setConfirm] = useState(false)
    const [showAlert, setAlert] = useState(false)
    const [loading, setLoading] = useState(true);

    const [idToDelete, setIdToDelete] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await api.get('api/evento');
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
            const response = await api.delete(`api/evento/${idToDelete}`)
            setData(data.filter(item => item.id !== idToDelete));
            setAlert(true)
        } catch (error) {
            console.log(error)
            setIdToDelete(null)
            alert("Sucedio un error inesperado al borrar el elemento")
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
                    
            <Flex justify-content='center' flex-direction='column' align-items='center' text-align='center'>
                <HeaderTitle title='ELIMINAR EVENTOS' /> 
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
                message="Se ha borrado el evento"
            />

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
                                <Btn onClick={()=> {
                                            setConfirm(true)
                                            setIdToDelete(elemento.id)
                                                }}color="second" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faTrashCan} />
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
export default EliminarEvento;

const P = styled.p`
    color:red;
    font-size:25px;
`