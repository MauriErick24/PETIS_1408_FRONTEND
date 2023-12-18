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
import { faPenToSquare, faTrashCan,faImage, faAdd } from '@fortawesome/free-solid-svg-icons';
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";
import Btn from "../../components/Btn";
import HeaderTitle from "../../components/HeaderTitle";
import Flex from "../../components/Flex";
import Spinner from '../../components/Spinner'
import ModalCrear from '../../components/Modals/ModalCrear';
import CrearActividades from './crear-actividades';
import api from '../../services/api'


import {useNavigate } from "react-router-dom";
import ModalCrearImagen from '../../components/Modals/ModalAgregarImagen';
import Title from '../../components/Fonts/Title';


const AgregarActividades = () => {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)

    const data2 = [{
        id:1,
        nombre_evento:"competencias",
        tipo_evento:{
            nombreTipo_evento:""
        }
    }
    ];
  
    const [data, setData] = useState([
        {id:1,
        nombre_evento:"jaljdlasd;la;asd;lfajsdfuiyqdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddduwiejasdca;ahldfhlaksdhfisudhfh",
        tipo_evento:{
            nombreTipo_evento:"asdfadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdfasdfadfasdfadfadfasd"
        },
        imagen:'../../assets/images/1.png'
        },
        {id:2,
          nombre_evento:"asdfasdasd;la;asd;lfajsdfuiyqdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddduwiejasdca;ahldfhlaksdhfisudhfh",
          tipo_evento:{
              nombreTipo_evento:"asdfadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdfasdfadfasdfadfadfasd"
          },
          imagen:'',
          },
          
      ]);
  
  
    const [showActividades, setShowActividades] = useState(false) 
    const [idActual, setIdActual] = useState(null)
    const [loading, setLoading] = useState(true);
  
    const [image,setImage] = useState(null)
  
    useEffect(() => {
        const fetchData = async () => {
          try {
           const response = await api.get('api/cantActividades');
            setData(response.data);
            console.log(response.data)
            //console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false); 
          }
        };
      
        fetchData();
      }, [refresh]); 
      
      
    
  
  
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

    const mostrarId=async(value)=>{
        console.log(value)
        setIdActual(value)
    }
  
    return (
        <>
  
              
            {loading ? (
                <Spinner/>
                ) : (
                    <>
                  { showActividades && <ModalCrearActividad><CrearActividades idActual={idActual} setShowActividades={setShowActividades} setRefresh={setRefresh} refresh={refresh}/></ModalCrearActividad>}
                   
                    {/* <ModalCrear/> */}
                   
            <Flex justify-content='center' >
                <Title>AGREGAR ACTIVIDADES</Title>
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
                            <th>#ACTIVIDADES</th> 
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
                                <Td>{elemento.actividades_count}</Td>
                                 <Td>
                                  <Flex justify-content='center' gap='2em' align-items='center'>
                                    {/* <Img src={elemento.imagen ? elemento.imagen : Imgn}/>
                                    */}
                                    <Btn onClick={() => {mostrarId(elemento.id);setIdActual(elemento.id); setShowActividades(true)}}  style={{ color: '#D1741E',border: 'none', background: 'none', fontSize: '0.85rem', width: '50px' }}>
                                        <FontAwesomeIcon icon={faCirclePlus} size="2x"/>
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

export default AgregarActividades


const ModalCrearActividad = styled.div`
    position: fixed;
    text-align: center;
    left: 35%;
    top: 20%;
    background-color: #D1D0BC;
    padding: 2%;
    border-radius: 15px;
    border: solid 3px black;
`


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