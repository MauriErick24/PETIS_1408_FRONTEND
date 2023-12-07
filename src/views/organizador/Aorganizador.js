import React, { useState } from "react";
import '../../assets/css/Crud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; //Modal


function Aorganizador() {
    const [isModalOpen, setIsModalOpen] = useState(false); //Modal
    const [selectedItems, setSelectedItems] = useState([]);
    const [modalSearchTerm, setModalSearchTerm] = useState(''); // Renombrar a modalSearchTerm
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
        
    const handleAccept = () => {
        // Cierra el modal
        toggleModal();
        //abre modal de confirmacion de comunicado
    };
    const tableData = [
        { id: 1, empresa: 'UMSA', encargado: 'Juan', accion: false },
        { id: 2, empresa: 'JALA SOFT', encargado: 'Maria', accion: false },
        { id: 3, empresa: 'ADOBE inc', encargado: 'Maria', accion: false },
    ];
    const [data, setData] = useState([
        {id:1,Personaje: 'yawermii', email: 'jorge@mail.com',Comunicado:0},
        {id:2,Personaje: 'Goku', email: 'jorge@mail.com', Comunicado:0},
        {id:3,Personaje: 'Luffy', email: 'jorge@mail.com', Comunicado:0},
        {id:4,Personaje: 'Tanjiro', email: 'jorge@mail.com', Comunicado:0},
        {id:5,Personaje: 'Eren',  email: 'jorge@mail.com', Comunicado:0},
        {id:6,Personaje: 'Kenshin', email: 'jorge@mail.com', Comunicado: 0},
        {id:7,Personaje: 'Edward',  email: 'jorge@mail.com', Comunicado: 0},
        {id:8,Personaje: 'Yusuke',  email: 'jorge@mail.com', Comunicado: 0},
        {id:9,Personaje: 'Seiya',  email: 'jorge@mail.com', Comunicado:0},
        {id:10,Personaje: 'Ichigo', email: 'jorge@mail.com', Comunicado: 0},
        {id:11,Personaje: 'Gon', email: 'jorge@mail.com', Comunicado: 0}
    ]);
    const handleCheckboxChange = (itemId) => {
        const updatedSelectedItems = selectedItems.includes(itemId)
            ? selectedItems.filter((id) => id !== itemId)
            : [...selectedItems, itemId];
        setSelectedItems(updatedSelectedItems);
    };
    

    const [selectedItemId, setSelectedItemId] = useState(null);
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
        // setModalSearchTerm(event.target.value); // Búsqueda para el modal
        setCurrentPage(1); // Resetear la página al cambiar el término de búsqueda
    };
    
    return (
        <>
            <div className="crud-container text-center" >
                <h3
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        marginTop: '20px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        border:'none'
                    }}
                >AGREGAR ORGANIZADOR A EVENTO</h3>
                <input
                    typAe="text"
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
                                <td>{elemento.id}</td>
                                <td>{elemento.Personaje}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.Comunicado}</td>
                                <td>
                                    <Button  style={{ color: 'gray',border: 'none', background: 'none', fontSize: '1rem', width: '50px' }}
                                            onClick={() => toggleModal(elemento.id)}
                                            >
                                    <FontAwesomeIcon icon={faCirclePlus} size="2x" />
                                    </Button>
                                    <Modal isOpen={isModalOpen} toggle={toggleModal}>
                                        <ModalHeader 
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                color: 'navy',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        >ORGANIZADOR</ModalHeader>
                                        <ModalBody className="modal-body"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        >
                                                <input
                                                    type="text"
                                                    placeholder="Buscar Organizador..."
                                                    value={modalSearchTerm}
                                                    onChange={(e) => setModalSearchTerm(e.target.value)}
                                                    style={{ marginBottom: '10px', padding: '5px' }}
                                                />
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Empresa</th>
                                                            <th>Encargado</th>
                                                            <th>Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {tableData
                                                            .filter(
                                                                (item) =>
                                                                    item.empresa.toLowerCase().includes(modalSearchTerm.toLowerCase()) 
                                                            )
                                                            .map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>{item.empresa}</td>
                                                                    <td>{item.encargado}</td>
                                                                    <td>
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selectedItems.includes(item.id)}
                                                                            onChange={() => handleCheckboxChange(item.id)}
                                                                            style={{ width: '20px', height: '20px' }}
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
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
                                                onClick={handleAccept}
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
                                        <ModalBody
                                            style={{
                                                backgroundColor: '#D1D0BC',
                                                textAlign: 'center',
                                                fontFamily: 'libre baskerville italic',
                                                fontSize: '1.2rem',
                                            }}   
                                        >
                                            Se ha agregado correctamente un organizador.
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

export default Aorganizador;
