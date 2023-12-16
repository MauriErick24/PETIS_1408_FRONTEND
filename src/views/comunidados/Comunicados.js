import React, { useState } from "react";
import '../../assets/css/Crud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; //Modal
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from "react";
import api from '../../services/api'
import Title from "../../components/Fonts/Title";
import styled from "styled-components";
import Btn from "../../components/Btn";
import Flex from "../../components/Flex";



function Comunicados() {
    const [hasCountChange,setHasCountChange]=useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false); //Modal
    const [comment, setComment] = useState(''); //Modal
    const toggleModal = (itemId,reset=true) => {
        if(reset){
        setSelectedItemId(itemId); // Establece el ID del elemento actual
        }
        setIsModalOpen(!isModalOpen);
        setIsConfirmationModalOpen(false); // Cierra el modal de confirmación al abrir/cerrar el modal principal
    };
    
    const validationSchema = Yup.object({
        comment: Yup.string().required('Este campo no puede estar vacío'),
    });

    const formik = useFormik({
        initialValues: {
            comment: '', // Asegúrate de que coincida con el nombre de tu campo de texto
        },
        validationSchema,
        onSubmit: (values) => {
            // Realiza acciones con los valores del formulario
            console.log('Formulario enviado:', values);
            // Incrementa el valor de Comunicado en el array data - 05/12/23
            const updatedData = data.map((item) =>
                item.id === selectedItemId ? { ...item, Comunicado: item.Comunicado + 1 } : item
            );
            setData(updatedData);
            // Guarda el comentario en otro arreglo asociado a la id de data
            const updatedComments = [...comments, { id: selectedItemId, comment: values.comment }];
            setComments(updatedComments);
            
            // Después de la actualización del estado 'comments'
            const lastComment = updatedComments[updatedComments.length - 1];

            // Ahora puedes acceder a 'id' y 'comment' de la última entrada
            const id = lastComment.id;
            const comentario = lastComment.comment;

            // Puedes imprimirlos o utilizarlos según tus necesidades
            console.log('ID:', id);
            console.log('Comentario:', comentario);

            //5/12/23
            // Cierra el modal y realiza otras acciones necesarias
            toggleModal('',false);
            setIsConfirmationModalOpen(true);
        },
    });
    
    const handleAccept = () => {
        // Aquí puedes realizar alguna acción con el comentario (por ejemplo, guardarlo)
        console.log('Comentario:', comment);
        const updatedData = data.map((item) =>
            item.id === selectedItemId ? { ...item, Comunicado: item.Comunicado + 1 } : item
        );
        setData(updatedData);
        // Guarda el comentario en otro arreglo asociado a la id de data
        const updatedComments = [...comments, { id: selectedItemId, comment }];
        setComments(updatedComments);
        // Cierra el modal
        toggleModal();
        //abre modal de confirmacion de comunicado
        setIsConfirmationModalOpen(true);
    };
    
    const [data, setData] = useState([
        // {id:1,Personaje: 'yawermii', email: 'jorge@mail.com',Comunicado:0},
        // {id:2,Personaje: 'Goku', email: 'jorge@mail.com', Comunicado:0},
        // {id:3,Personaje: 'Luffy', email: 'jorge@mail.com', Comunicado:0},
        // {id:4,Personaje: 'Tanjiro', email: 'jorge@mail.com', Comunicado:0},
        // {id:5,Personaje: 'Eren',  email: 'jorge@mail.com', Comunicado:0},
        // {id:6,Personaje: 'Kenshin', email: 'jorge@mail.com', Comunicado: 0},
        // {id:7,Personaje: 'Edward',  email: 'jorge@mail.com', Comunicado: 0},
        // {id:8,Personaje: 'Yusuke',  email: 'jorge@mail.com', Comunicado: 0},
        // {id:9,Personaje: 'Seiya',  email: 'jorge@mail.com', Comunicado:0},
        // {id:10,Personaje: 'Ichigo', email: 'jorge@mail.com', Comunicado: 0},
        // {id:11,Personaje: 'Gon', email: 'jorge@mail.com', Comunicado: 0}
    ]);
    const [comments, setComments] = useState([]);

    const [selectedItemId, setSelectedItemId] = useState(null);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);


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
        setCurrentPage(1); // Resetear la página al cambiar el término de búsqueda
    };

    useEffect(() => {
        if(hasCountChange){
        const fetchData = async () => {
          try {
           const response = await api.get('api/asignarComunicado');
           //const response1=await api.get('api/organizadores')
            setData(response.data);
            
            //setTableData(response1.data);
            //console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setHasCountChange(false)
            //setLoading(false); 
          }
          
        };
        
      
        fetchData();
    }
      }, [hasCountChange]); 

      const sendData = async(values) => {
        console.log(values)
        try {
           const response = await api.post('/api/comunicados', values)
           setSelectedItemId(null)
           setHasCountChange(true)
            console.log(response.data) 
            //setShowAlert(true)
        } catch (error) {
            console.log(error)
            //setShowAlertError(true)

        }
    }
    

    return (
        <>
            <div className="crud-container text-center" >
                {/* <h3
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        marginTop: '20px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        border:'none'
                    }}
                >AGREGAR COMUNICADO A EVENTO</h3> */}
                <Title>AGREGAR COMUNICADO A EVENTO</Title>
                <input
                    type="text"
                    placeholder="Buscar Evento... "
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Personaje</th>
                            {/* <th>Anime</th>
                            <th>Telefono</th> */}
                            <th>Email</th>
                            <th>#Com</th>
                            <th>Agregar</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((elemento) => (
                            <tr key={elemento.id}>
                                <Td>{elemento.id}</Td>
                                <Td>{elemento.nombre_evento}</Td>
                                {/* <td>{elemento.Anime}</td>
                                <td>{elemento.Telefono}</td> */}
                                <Td>{elemento.tipo_evento?.nombreTipo_evento}</Td>
                                <Td>{elemento.comunicados_count}</Td>
                                <Td justify-Content='center'>
                                    {/* <Button color="primary" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Button> */}

                                    <Flex justify-content='center'>
                                    <Button  style={{ color: '#D1741E',border: 'none', background: 'none', fontSize: '0.85rem', width: '50px' }}
                                            //onClick={toggleModal}
                                            onClick={() => toggleModal(elemento.id)}
                                            >
                                    <FontAwesomeIcon icon={faCirclePlus} size="2x" />
                                    </Button>
                                    </Flex>
                                    <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                        <ModalHeader 
                                            //toggle={toggleModal}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                color: 'navy',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        >COMUNICADO</ModalHeader>
                                        <ModalBody className="modal-body"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                backgroundColor: '#D1D0BC',
                                                // justifyContent: 'center',
                                                // alignItems: 'center'
                                            }}
                                        >
                                            <label htmlFor="comment">Comentario:</label>
                                            <textarea
                                                id="comment"
                                                value={formik.values.comment}
                                                // onChange={(e) => setComment(e.target.value)}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                rows="6"
                                            />
                                            {formik.touched.comment && formik.errors.comment ? (
                                                <div style={{ color: 'red' }}>{formik.errors.comment}</div>
                                            ) : null}
                                        </ModalBody>
                                        <ModalFooter
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        
                                        >
                                            <Button color="primary" 
                                                // onClick={handleAccept}
                                                onClick={() => {
                                                    formik.handleSubmit();
                                                    // Puedes realizar acciones adicionales después de enviar el formulario si es necesario
                                                }}
                                                style={{
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    padding: '5px',
                                                    margin: '5px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    border: 'none',
                                                    
                                                  }}
                                            
                                            >
                                                ACEPTAR
                                            </Button>
                                            <Button  onClick={toggleModal}
                                                style={{
                                                    backgroundColor: '#D1741E',
                                                    padding: '5px',
                                                    margin: '5px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    border: 'none',
                                                }}
                                            >
                                                CANCELAR
                                            </Button>
                                        </ModalFooter>
                                    </Modal>
                                    <Modal 
                                        isOpen={isConfirmationModalOpen} 
                                        toggle={() => setIsConfirmationModalOpen(!isConfirmationModalOpen)}
                                        centered
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '360px',
                                        }}
                                    >
                                        {/* <ModalHeader>Confirmación</ModalHeader> */}
                                        <ModalBody
                                            style={{
                                                backgroundColor: '#D1D0BC',
                                                textAlign: 'center',
                                                fontFamily: 'libre baskerville italic',
                                                fontSize: '1.2rem',
                                            }}   
                                        >
                                            SE VA A AGREGAR EL  COMUNICADO 
                                        </ModalBody>
                                        <ModalFooter
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        >
                                            <Button 
                                            color="primary" onClick={() => {setIsConfirmationModalOpen(false);sendData({comentario:formik.values.comment,id:selectedItemId})}}
                                                style={{
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    padding: '5px',
                                                    margin: '5px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    border: 'none',
                                                    
                                                  }}
                                            >
                                                ACEPTAR
                                            </Button>
                                            <Button  onClick={toggleModal}
                                                style={{
                                                    backgroundColor: '#D1741E',
                                                    padding: '5px',
                                                    margin: '5px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    border: 'none',
                                                }}
                                            >
                                                CANCELAR
                                            </Button>
                                        </ModalFooter>
                                    </Modal>

                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination mt-3">
                    <button disabled={currentPage === 1} onClick={() => handleClick(currentPage - 1)}
                        style={{
                            borderRadius: '24px',
                            width: '50px',
                            padding: '14px',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >&lt;</button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button key={i} className={i + 1 === currentPage ? "active" : ""} onClick={() => handleClick(i + 1)}
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '14px',
                            margin: '5px',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            border: 'none',
                        }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button disabled={currentPage === totalPages} onClick={() => handleClick(currentPage + 1)}
                        style={{
                            borderRadius: '24px',
                            width: '50px',
                            padding: '14px',
                            cursor: 'pointer',
                            border: 'none'
                        }}
                    >&gt;</button>
                </div>
            </div>
        </>
    );
}

export default Comunicados;

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
