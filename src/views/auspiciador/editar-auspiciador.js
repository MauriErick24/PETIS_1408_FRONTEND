import '../../assets/css/Afiche.css';
import imagen1 from '../../assets/images/1.png';
import imagen2 from '../../assets/images/2.png';
import imagen3 from '../../assets/images/3.png';
import imagen4 from '../../assets/images/4.png';
import imagen5 from '../../assets/images/5.png';
import imagen6 from '../../assets/images/6.png';

import Imgn from '../../assets/images/example-img.jpg'

import Alert from '../../components/Alert';
import ErrorMessage from "../../components/ErrorMessage";

import React, { useState ,useEffect} from "react";
import '../../assets/css/Crud.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan,faImage } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";
import Btn from "../../components/Btn";
import HeaderTitle from "../../components/HeaderTitle";
import Flex from "../../components/Flex";
import Spinner from '../../components/Spinner'
import ModalCrear from '../../components/Modals/ModalCrear';

import api from '../../services/api'


import {useNavigate } from "react-router-dom";
import ModalCrearImagen from '../../components/Modals/ModalAgregarImagen';
import Title from '../../components/Fonts/Title';
import ModalEditarAuspiciador from '../../components/Modals/ModalEditarAuspiciador';
const EditarAuspiciador = () => {
    const navigate = useNavigate()

    const data2 = [{
        id:1,
        nombre_evento:"competencias",
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
            nombre:"Auspiciador",
            email:"correo@auspiciador.com",
            imagen:'../../assets/images/1.png',
            telefono: '789456132',
            direccion: 'Calle Sucre',
        },

        {id:2,
            nombre:"BAuspiciador",
            email:"correo@bauspiciador.com",
            imagen:'../../assets/images/1.png',
            telefono: '123456789',
            direccion: 'Calle Jordan',
        },
        
          
      ]);

    const [currentAuspiciador, setCurrentAuspiciador] = useState('')
  
  
    const [showModal, setShowModal] = useState(false) 
    const [idActual, setIdActual] = useState(null)
    const [loading, setLoading] = useState(true);
  
    const [image,setImage] = useState(null)
  
    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await api.get('api/auspiciadores');
            setData(response.data);
  
            //console.log(response.data);
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
                    
                  { showModal && <ModalEditarAuspiciador closeModal={setShowModal} data={currentAuspiciador}/>}
                   
                    {/* <ModalCrear/> */}
                   
            <Flex justify-content='center' >
                <Title>EDITAR AUSPICIADOR</Title>
            </Flex>
  
            <div className="crud-container text-center" >
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>CORREO</th>
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
                                <Td>{elemento.email}</Td>
                                <Td>
                                  <Flex justify-content='center' gap='2em' align-items='center'>
                                    <Btn onClick={() => {setIdActual(elemento.id); setShowModal(true); setCurrentAuspiciador(elemento)}}  color="second" style={{ fontSize: '1.25rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
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

export default EditarAuspiciador


const Img = styled.img`
  width: 50px;
  height: 50px:
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