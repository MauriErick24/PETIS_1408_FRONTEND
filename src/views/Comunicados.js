import React, { useState } from "react";
import '../assets/css/Crud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; //Modal
import { useFormik } from 'formik';
import * as Yup from 'yup';



function Comunicados() {
    const [isModalOpen, setIsModalOpen] = useState(false); //Modal
    const [comment, setComment] = useState(''); //Modal
    const toggleModal = () => {
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
            // Cierra el modal y realiza otras acciones necesarias
            toggleModal();
            setIsConfirmationModalOpen(true);
        },
    });
    
    const handleAccept = () => {
        // Aquí puedes realizar alguna acción con el comentario (por ejemplo, guardarlo)
        console.log('Comentario:', comment);
        // Cierra el modal
        toggleModal();
        //abre modal de confirmacion de comunicado
        setIsConfirmationModalOpen(true);
    };
    
    const data = [
        {id:1,Personaje: 'Naruto jorge ledezma umss safsadf', Anime: 'Naruto jorge ledezma',Telefono: 1234456887, email: 'jorge@mail.com',Comunicado:0},
        {id:2,Personaje: 'Goku', Anime: 'Dragon Ball',Telefono: 1234, email: 'jorge@mail.com', Comunicado:0},
        {id:3,Personaje: 'Luffy', Anime: 'One Piece',Telefono: 1234, email: 'jorge@mail.com', Comunicado:0},
        {id:4,Personaje: 'Tanjiro', Anime: 'Kimetsu no Yaiba',Telefono: 1234, email: 'jorge@mail.com', Comunicado:0},
        {id:5,Personaje: 'Eren', Anime: 'Shingeki no Kyojin',Telefono: 1234, email: 'jorge@mail.com', Comunicado:0},
        {id:6,Personaje: 'Kenshin', Anime: 'Rurouni Kenshin',Telefono: 1234, email: 'jorge@mail.com', Comunicado: 0},
        {id:7,Personaje: 'Edward', Anime: 'Full Metal Alchemist',Telefono: 1234, email: 'jorge@mail.com', Comunicado: 0},
        {id:8,Personaje: 'Yusuke', Anime: 'Yu Yu Hakusho',Telefono: 1234, email: 'jorge@mail.com', Comunicado: 0},
        {id:9,Personaje: 'Seiya', Anime: 'Caballeros del Zodiaco',Telefono: 1234, email: 'jorge@mail.com', Comunicado:0},
        {id:10,Personaje: 'Ichigo', Anime: 'Bleach',Telefono: 1234, email: 'jorge@mail.com', Comunicado: 0},
        {id:11,Personaje: 'Gon', Anime: 'Hunter x Hunter',Telefono: 1234, email: 'jorge@mail.com', Comunicado: 0}
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);


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
            <div className="crud-container text-center" >
                <h3>AGREGAR COMUNICADO A EVENTO</h3>
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
                            <th>Anime</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>#Com</th>
                            <th>Agregar</th>
                            
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
                                <td>{elemento.Comunicado}</td>
                                <td>
                                    {/* <Button color="primary" style={{ fontSize: '1rem', padding: '0.375rem 0.75rem', width: '50px',marginRight: '5px' }}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Button> */}

                                    <Button  style={{ color: 'gray',border: 'none', background: 'none', fontSize: '1rem', width: '50px' }}
                                            onClick={toggleModal}>
                                    <FontAwesomeIcon icon={faCirclePlus} size="2x" />
                                    </Button>
                                    <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                        <ModalHeader toggle={toggleModal}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                color: 'navy'
                                            }}
                                        >COMUNICADO</ModalHeader>
                                        <ModalBody className="modal-body"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
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
                                                alignItems: 'center'
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
                                            {/* <Button color="secondary" onClick={toggleModal}>
                                                Cancelar
                                            </Button> */}
                                        </ModalFooter>
                                    </Modal>
                                    <Modal isOpen={isConfirmationModalOpen} toggle={() => setIsConfirmationModalOpen(!isConfirmationModalOpen)}
                                        centered
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '360px',
                                        }}
                                    >
                                        {/* <ModalHeader>Confirmación</ModalHeader> */}
                                        <ModalBody>
                                            Se ha agregado correctamente un comunicado.
                                        </ModalBody>
                                        <ModalFooter
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                
                                            }}
                                        >
                                            <Button 
                                            color="primary" onClick={() => setIsConfirmationModalOpen(false)}
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
                                        </ModalFooter>
                                    </Modal>

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

export default Comunicados;
