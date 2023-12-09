import React, { useState } from "react";
import '../../assets/css/Crud.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap'; //Modal



function Aorganizador() {
    const [isModalOpen, setIsModalOpen] = useState(false); //Modal

    const toggleModal = (itemId) => {
        setSelectedItemId(itemId); // Establece el ID del elemento actual
        setIsModalOpen(!isModalOpen);
        setIsConfirmationModalOpen(false); // Cierra el modal de confirmación al abrir/cerrar el modal principal
        
        
    };
    
     const handleAccept = () => {
         toggleModal();
         setIsConfirmationModalOpen(true);
         // Aquí puedes acceder a la información de las filas seleccionadas y el id del evento
         console.log("Filas seleccionadas:", selectedRows);
         console.log("ID del evento:", selectedItemId);

         // Incrementa el campo "Comunicado" en 1 para el evento seleccionado
         const updatedData = data.map((item) =>
         item.id === selectedItemId
            ? { ...item, Comunicado: item.Comunicado + 1 }
            : item
        );
        // Actualiza el estado con los datos actualizados
        setData(updatedData);
        // Luego, limpias la selección después de procesarla
        setSelectedRows([])
    };

    const [tableData, setTableData] = useState([
        { id: 1, empresa: 'yahoo', responsable: 'Responsable1' },
        { id: 2, empresa: 'google', responsable: 'Responsable2' },
        { id: 3, empresa: 'twitter', responsable: 'Responsable3' },
        { id: 4, empresa: 'facebook', responsable: 'Responsable4' },
        { id: 5, empresa: 'wasap', responsable: 'Responsable5' },
        { id: 6, empresa: 'line', responsable: 'Responsable6' },
        { id: 7, empresa: 'encore', responsable: 'Responsable7' },
        { id: 8, empresa: 'titanium', responsable: 'Responsable8' },
        { id: 9, empresa: 'k-os', responsable: 'Responsable8' },
        { id: 10, empresa: 'cco-partner', responsable: 'Responsable8' },
        { id: 11, empresa: 'microsoft', responsable: 'Responsable8' },

    ]);
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

    const [selectedItemId, setSelectedItemId] = useState(null);
    const itemsPerPage = 5;
    const itemsPerPageModal = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageModal, setCurrentPageModal] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchTermModal, setSearchTermModal] = useState("");
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfLastItemModal = currentPageModal * itemsPerPageModal;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const indexOfFirstItemModal = indexOfLastItemModal - itemsPerPageModal;

    const filteredData = data.filter(elemento =>
        elemento.Personaje.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    const filteredDataModal = tableData.filter(elemento =>
        elemento.empresa.toLowerCase().startsWith(searchTermModal.toLowerCase())
      );
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const currentItemsModal = filteredDataModal.slice(indexOfFirstItemModal, indexOfLastItemModal);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const totalPagesModal = Math.ceil(tableData.length / itemsPerPageModal);
    
    const handleCheckboxChange = (id, empresa) => {
        // Verificar si la fila ya está seleccionada
        const isRowSelected = selectedRows.some((row) => row.id === id);
        if (isRowSelected) {
          // Si ya está seleccionada, la eliminamos de la lista de selección
          const updatedSelection = selectedRows.filter((row) => row.id !== id);
          setSelectedRows(updatedSelection);
        } else {
          // Si no está seleccionada, la agregamos a la lista de selección
          setSelectedRows([...selectedRows, { id, empresa }]);
        }
      };
      
     
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleClickModal = (pageNumber) => {
        setCurrentPageModal(pageNumber);
    };

    const handleSearchModal = (event) => {
        setSearchTermModal(event.target.value);
        setCurrentPageModal(1); // Resetear la página al cambiar el término de búsqueda en el modal
      };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
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
                    type="text"
                    placeholder="Buscar Evento... "
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EVENTO</th>
                            <th>TIPO EVENTO</th>
                            <th>#ORGA</th>
                            <th>AGREGAR</th>
                            
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
                                            
                                            onClick={() => {
                                                setCurrentPageModal(1); // Restablece la página al abrir el modal
                                                toggleModal(elemento.id)}
                                            }
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
                                        >ORGANIZADORES</ModalHeader>
                                        <ModalBody className="modal-body"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                backgroundColor: '#D1D0BC',
                                            }}
                                        >
                                            <Input
                                                type="text"
                                                placeholder="Buscar Empresa..."
                                                value={searchTermModal}
                                                onChange={handleSearchModal}
                                            />
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>EMPRESA</th>
                                                        <th>RESPONSABLE</th>
                                                        <th>ACCIÓN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {/* {tableData.slice(indexOfFirstItemModal, indexOfLastItemModal).map((item) => (  */}
                                                  {currentItemsModal.map((item) => ( 
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.empresa}</td>
                                                        <td>{item.responsable}</td>
                                                        <td>
                                                            {/* Agrega aquí la lógica para la acción (checkbox u otro) */}
                                                            <Input
                                                                type="checkbox"
                                                                onChange={() => handleCheckboxChange(item.id, item.empresa)}
                                                                checked={selectedRows.some((row) => row.id === item.id)}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                            <div className="pagination mt-3">
                                                {[...Array(totalPagesModal)].map((_, i) => (
                                                    <button key={i} 
                                                    className={i + 1 === currentPageModal ? "active" : ""} 
                                                    onClick={() => handleClickModal(i + 1)}>
                                                        {i + 1}
                                                    </button>
                                                ))}
                                            </div>

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
                                    <Modal isOpen={isConfirmationModalOpen} toggle={() => setIsConfirmationModalOpen(false)}
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
                                            SE VA A AGREGAR LOS ORGANIZADORES SELECCIONADOS
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
                                            color="primary" 
                                            onClick={() => setIsConfirmationModalOpen(false)}
                                                
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
