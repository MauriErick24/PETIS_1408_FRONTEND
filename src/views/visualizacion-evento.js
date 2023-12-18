import styled from 'styled-components';
import visualizar from '../assets/css/visualizar.css'
import Asidei from '../components/Asidei'
import Asided from '../components/Asided'
import Modal from 'react-modal';
import Flex from '../components/Flex'
import HeaderDetail from '../components/HeaderDetail';
import Card from '../components/Card';
import Btn from '../components/Btn';
import BubbleContainer from '../components/BubbleContainer';
import BubbleIcon from '../components/BubbleIcon';
import Input from '../components/input/Input';
import Inputd from '../components/input/Inputd';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Imagen from '../assets/images/example-img.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ModalEquipos from '../components/Modals/ModalEquipos'

import api from '../services/api'
import Alert from '../components/Alert';
import Confirm from '../components/Confirm';

function Visualizacionevento(){

    const navigate = useNavigate();

    const [showComunicados, setShowComunicados] = useState(false)
    
    
    const {id} = useParams();

    const [auspiciadores,setAuspiciador]=useState({});
    
    const [data, setData] = useState({
         id: 2,
         nombre_evento: "eveentos 110",
         inicio_inscripcion: "2023-10-04",
         fin_inscripcion: "2023-11-21",
         inicio_actividades: "2023-11-21",
         fin_actividades: "2023-12-01",
        // inicio_premiacion: "2023-12-01",
        // fin_evento: "2023-12-01",
        // imagen: 'https://es.community.intersystems.com/sites/default/files/inline/images/ai_welcome_wide_2.jpg',
        // lugar: "coña coña",
        // email: "pretencioso@gmail.com",
        // descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
        // hora_inicio_inscripcion: "09:00:00",
        // hora_fin_inscripcion: "09:00:00",
        // hora_inicio_actividades: "09:00:00",
        // hora_fin_actividades: "09:00:00",
        // telefono: 78327438,
        // reglas: "no ser",
        // detalle: "blba bla bla",
        // afiche: "nose que es un afiche",
        // contenido: "este es el contenido del evento",
        // invitado: "shrek",
        // tipoEvento_id: 4,
        // tipo_evento: {
        //     id: 4,
        //     nombreTipo_evento: "Reclutamiento"
        // },
        premios: [],
        actividades: [
          {
            id:1,
            nombre: "El día de mañana se habilitara las inscripciones del dicho evento ",
            fecha_inicio: "2024-06-12",
            fecha_fin: "2024-06-30"
          },
        ],
        tipo_evento:[
          {
            nombreTipo_evento:''
          }
        ],
        auspiciadores:[
                    {
                        nombre: 'ICPC',
                        imagen: 'https://icpc.global/regionals/abouticpc/foundationlogo.png'
                    },
                    {
                        nombre: 'UMSS',
                        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png/1280px-Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png'
                    },
                    {
                        nombre: 'HACKER CUP',
                        imagen: 'https://images-platform.99static.com/LWy50Ye4pyXRHqli3cODzyN-PlE=/500x500/top/smart/99designs-contests-attachments/6/6107/attachment_6107282'
                    },
                ]
    })




    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showInscribirseModal, setShowInscribirseModal] = useState(false);
    const [showModal, setShowModal]= useState(false)
    const [isSelected, setIsSelected] = useState(false);
    const [showAlertCancelar,setShowAlertCancelar] = useState(false)
    const [showAlertConfirm,setShowAlertConfirm] = useState(false)
   
    const openModal = () => {
      setIsModalOpen(true);
    };
   const openModal2 = () => {
    setIsModalOpen(true);
    };
    
    const openModal3 = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
      setTaskInput('');
      setStartDate('');
      setEndDate('');
    };
  
    const addTask = () => {
      if (taskInput.trim() === '') {
        alert('Por favor, ingrese una tarea.');
        return;
      }
  
      if (startDate > endDate) {
        alert('La fecha de inicio debe ser anterior o igual a la fecha de fin.');
        return;
      }
  
      const newTask = {
        id: new Date().getTime(), // Agregamos un ID único para cada tarea
        task: taskInput,
        startDate,
        endDate,
      };
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
      closeModal();
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    };
     //MODAL
    
 // PARA EL AUSPICIADOR
   
      const [email, setEmail] = useState('');
      const [Ci, setCi] = useState('');
      const [pais, setPais] = useState('');
    // const [data, setData] = useState({
    //     id: id,
    //     titulo: "DESCRIPCION DEL EVENTO",
    //     descripcion:"El Desafío de  ALGORITMOS es un evento de programación competitiva que reúne a mentes brillantes de todo el mundo en una batalla intelectual de habilidades de programación y resolución de problemas. Este evento anual es el punto culminante de la temporada para programadores, ingenieros y entusiastas de la informática, donde se enfrentan en un emocionante torneo de códigos.",
    //     inicioEvento: "17/01/2023",
    //     finEvento: "15/02/2023",
    //     inicioInscripcion: "20/01/2023",
    //     finInscripcion: "25/01/2023",
    //     email: "contacto@domain.com",
    //     telefono: 68745201,
    //     imagen: 'https://es.community.intersystems.com/sites/default/files/inline/images/ai_welcome_wide_2.jpg',
    //     auspiciadores:[
    //         {
    //             nombreAuspiciador: 'ICPC',
    //             imagen: 'https://icpc.global/regionals/abouticpc/foundationlogo.png'
    //         },
    //         {
    //             nombreAuspiciador: 'UMSS',
    //             imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png/1280px-Marca_Vertical_Universidad_Mayor_de_San_Sim%C3%B3n_Cochabamba_Bolivia.png'
    //         },
    //         {
    //             nombreAuspiciador: 'HACKER CUP',
    //             imagen: 'https://images-platform.99static.com/LWy50Ye4pyXRHqli3cODzyN-PlE=/500x500/top/smart/99designs-contests-attachments/6/6107/attachment_6107282'
    //         },
    //     ]
    // })

    useEffect(()=>{
        const fetchData = async()=>{
            try{
              const response = await api.get(`/api/evento/${id}`)
                setData(response.data); 
                setAuspiciador(response.data.auspiciadores);
                console.log(response.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();
    }, []) 



    const customStyles = {
      content: {
        width: '35%', // Puedes ajustar el ancho según tus necesidades
        height: '45%', // Puedes ajustar la altura según tus necesidades
        margin: 'auto',
        borderRadius: '30px', // Centrar el modal
        backgroundColor: '#BFBA8A'
      },
    };
    const inputStyle = {
      backgroundColor: 'white',  // Color de fondo rojo
      borderRadius: '30px',    // Bordes redondeados
      padding: '10px 20px',    // Relleno interior
      color: 'black',         // Color del texto
      fontSize:'20px',
      width:'100%'
    
    };
    const inputStyle2 = {
      backgroundColor: 'white',  // Color de fondo rojo
      borderRadius: '30px',    // Bordes redondeados
      padding: '10px 20px',    // Relleno interior
      color: 'black',         // Color del texto
      fontSize:'20px',
      width:'100%',
      margin: '2em'
      
    
    };
    const letra = {
       // Color de fondo rojo
        // Bordes redondeados
      padding: '5px 10px',    // Relleno interior
      color: 'black',         // Color del texto
      fontSize:'20px',
      
    
    };
    const Boton2= {
      backgroundColor: '#D1741E',  // Color de fondo rojo
      borderRadius: '30px',    // Bordes redondeados
      padding: '10px 20px',    // Relleno interior
      color: 'white',         // Color del texto
      fontSize:'20px',
      margin: '0.4em',
      width:'30%'
  };
  const Boton1= {
    backgroundColor: '#000',  // Color de fondo rojo
    borderRadius: '30px',    // Bordes redondeados
    padding: '10px 20px',    // Relleno interior
    color: 'white',         // Color del texto
    fontSize:'20px',
    margin: '0.4em',
    width:'30%'
  };
  const [showFormulario, setShowFormulario] = useState(false);
  const [showCodigoModal, setShowCodigoModal] = useState(false);
  const [showInscripcionExitosaModal, setShowInscripcionExitosaModal] = useState(false);
  const [emailI, setemailI] = useState("");
  const [ciI, setCiI] = useState("");
  const [paisI, setPaisI] = useState("");
  const [codigo, setCodigo] = useState("");
  const [showConfirmacionModal, setShowConfirmacionModal] = useState(false);
  const [emailIError, setemailIError] = useState("");
  const [ciIError, setCiIError] = useState("");
  const [paisIError, setPaisIError] = useState("");
  const openFormularioModal = () => {
    setShowFormulario(true);
};

const closeFormularioModal = () => {
    setShowFormulario(false);
};

const openCodigoModal = () => {
    setShowCodigoModal(true);
};

const closeCodigoModal = () => {
    setShowCodigoModal(false);
};

const openInscripcionExitosaModal = () => {
    setShowInscripcionExitosaModal(true);
};

const closeInscripcionExitosaModal = () => {
    setShowInscripcionExitosaModal(false);
};
const [codigoAleatorio, setCodigoAleatorio] = useState(null);
const [isFormValid, setIsFormValid] = useState(false);
const handleInscribirse = () => {
    const isemailIValid = validateemailI(emailI);
    const isCiIValid = validateCi(ciI);
    const isPaisIValid = validatePais(paisI);
    if (isemailIValid && isCiIValid && isPaisIValid) {
      setIsFormValid(true);

      // Generar un código aleatorio de 5 dígitos
      const nuevoCodigoAleatorio = Math.floor(10000 + Math.random() * 90000);

      // Mostrar la alerta con el código
      alert(`Tu código de inscripción es: ${nuevoCodigoAleatorio}`);

      // Almacenar el código aleatorio generado
      setCodigoAleatorio(nuevoCodigoAleatorio);

      // Lógica de inscripción aquí

      // Cerrar el modal después de la inscripción y abrir el modal del código
      closeFormularioModal();
      openCodigoModal();
  } else {
      setIsFormValid(false);
  }
};
const handleCodigoAceptar = () => {
  if (!validateCodigo(codigo)) {
      return;
  }
  if (codigo === codigoAleatorio.toString()) {
      // Lógica para verificar el código aquí

      // Cerrar el modal de código después de verificar el código
      closeCodigoModal();

      // Abrir el modal de confirmación
      openConfirmacionModal();
  } else {
      // Mostrar un mensaje de error (puedes personalizar según tus necesidades)
      alert("Código incorrecto. Por favor, inténtalo de nuevo.");
  }
};

const handleReenviarCodigo = () => {
  alert(`Tu código de inscripción es: ${codigoAleatorio}`);
// Puedes agregar aquí la lógica para reenviar el código si es necesario
console.log("Código reenviado");
};
const openConfirmacionModal = () => {
  setShowConfirmacionModal(true);
};

const closeConfirmacionModal = () => {
  setShowConfirmacionModal(false);
  
};

const validateemailI = (emailI) => {
  const emailIRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailIRegex.test(emailI)) {
      setemailIError("Ingrese un correo electrónico válido.");
      return false;
  }
  setemailIError("");
  return true;
};


const validateCi = (ciI) => {
  const ciRegex = /^[0-9]+$/;
  if (!ciRegex.test(ciI)) {
      setCiIError("Ingrese solo números en la cédula de identidad.");
      return false;
  }
  setCiIError("");
  return true;
};

const validatePais = (paisI) => {
  const paisRegex = /^[a-zA-Z]+$/;
  if (!paisRegex.test(paisI)) {
      setPaisIError("El nombre del país solo debe contener letras.");
      return false;
  }

  if (paisI.length > 15) {
      setPaisIError("El nombre del país no debe tener más de 15 caracteres.");
      return false;
  }
  
  setPaisIError("");
  return true;
};

const validateCodigo = (codigo) => {
  // Puedes agregar más lógica de validación según tus necesidades
  return codigo.length > 0;
};
    return (
        <>  
      <HeaderDetail nombreEvento={`${data.nombre_evento} ${data.id}`} tipoEvento={data.tipo_evento.nombreTipo_evento} />

{/* 
        {showModal && <ModalEquipos isSelected={setIsSelected} showModal={setShowModal}/>} */}

        <Flex justify-content='space-between'>
            <Asided>
                <Flex flex-direction='column'  text-align='center' gap='2em' align-items = 'center'>
                    <Img src={data.imagen} width="95%"/>

                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                  <P style={{ fontSize: '24px' }}>Duracion del evento</P>
                  <P style={{ fontSize: '24px' }}>{data.inicio_actividades} - {data.fin_actividades}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center' align-items = 'center' gap='0.5em'>
                  <P style={{ fontSize: '24px' }}>Fecha de inscripciones</P>
                  <P style={{ fontSize: '24px' }}>{data.inicio_inscripcion} - {data.fin_inscripcion}</P>
                  </Flex>
                  <Flex flex-direction='column' text-align='center'  gap='0.5em'>
                  <P style={{ fontSize: '24px' }}>CONTACTOS DEL EVENTO</P>
                  <P style={{ fontSize: '24px' }}>E-mail: {data.email}</P>
                  <P style={{ fontSize: '24px' }}>Telefono: {data.telefono}</P>
                  </Flex>

                  <Flex flex-direction='column' gap='0.1em'>
                    <P id='auspiciador'>AUSPICIADORES</P>
                    <BubbleContainer>
                        {data.auspiciadores.map((auspiciador) => (
                            <BubbleIcon iconName={auspiciador.nombre} imageUrl={auspiciador.logo}/>
                        ))}
                    </BubbleContainer>
                  </Flex>

                  <Btn onClick={openFormularioModal}>
                    INSCRIBIRSE
                </Btn>
                <Modal
                    isOpen={showFormulario}
                    onRequestClose={closeFormularioModal}
                    contentLabel="Formulario de Inscripción"
                    style={customStyles}
                >
                    <h2 style={{ textAlign: 'center' }}>Formulario de Inscripción</h2>
                    <form>
                        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h2 style={letra}>Correo Electrónico</h2>
                            <br />
                            <input style={inputStyle} type="emailI" value={emailI} onChange={(e) => setemailI(e.target.value)} />
                            <span style={{ color: 'red' }}>{emailIError}</span>
                        </label>
                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <label style={{ marginRight: '10px' }}>
                            <h2 style={letra}>Cedula de identidad</h2>
                            <input style={inputStyle} type="number" value={ciI} onChange={(e) => setCiI(e.target.value)} />
                            <span style={{ color: 'red' }}>{ciIError}</span>
                          </label>
                          <label>
                            <h2 style={letra}>País</h2>
                            <input style={inputStyle} type="text" value={paisI} onChange={(e) => setPaisI(e.target.value)} />
                            <span style={{ color: 'red' }}>{paisIError}</span>
                          </label>
                        </div>


                        <br />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                          <Btn onClick={() => { if (emailI || ciI || paisI) { handleInscribirse(); } }} style={Boton1}>
                            ACEPTAR
                          </Btn>
                          <Btn onClick={closeFormularioModal} style={Boton2}>
                            CANCELAR
                          </Btn>
                        </div>
                    </form>
                </Modal>

                {/* Modal para ingresar código */}
                <Modal
                  isOpen={showCodigoModal}
                  onRequestClose={closeCodigoModal}
                  contentLabel="Verificación de Código"
                  style={customStyles}
                >
                  <h2 style={{ textAlign: 'center' }}>INGRESA EL CODIGO QUE TE ENVIAMOS A TU CORREO</h2>
                  <div>
                    <br></br>
                    <br></br>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label>
                      <input style={inputStyle} type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                    </label>
                    <Btn onClick={handleCodigoAceptar} style={Boton1}>
                      ACEPTAR
                    </Btn>
                  </div>
                  <br></br>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '20px' }}>EN CASO DE QUE NO SE LE ENVIO, PRESIONE EL BOTÓN DE "REENVIAR CODIGO"</p>
                    <Btn onClick={handleReenviarCodigo} style={Boton1}>
                      REENVIAR CODIGO
                    </Btn>
                  </div>
                  </div>
                </Modal>


                {/* Modal de inscripción exitosa */}
                <Modal
                    isOpen={showConfirmacionModal}
                    onRequestClose={closeConfirmacionModal}
                    contentLabel="Confirmación de Inscripción"
                    style={{
                      content: {
                        width: '40%',
                        height: '40%',
                        margin: 'auto',
                        borderRadius: '30px',
                        backgroundColor: '#BFBA8A',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Usted se ha inscrito correctamente al evento</h2>
                      <FontAwesomeIcon icon={faMugHot} style={{ fontSize: '128px', marginLeft: '10px' }} />
                    </div>
                  </Modal>

                     



                      </Flex>
                
                
                  
            </Asided>

            <Flex flex-direction='column'>
                <Card title={"DESCRIPCION DE EVENTO"} data={data.descripcion} />
                {/* <Card title={"REQUISITOS DEL EVENTO"} data={data.requisitos} /> */}
                <Card title={"DETALLES"} data={data.detalle} />
                {/* <Card title={"REGLAS"} data={data.reglas} /> */}
                <Card title={"PREMIOS"}>
                  <ul>
                    {data.premios.map((premio) => (
                      <>
                        <li>{premio.nombre}</li> 
                      </>
                    ))}
                    </ul>
                </Card>
                
            </Flex>
            
            <Asided>
                <Flex flex-direction='column' justify-content='space-between' gap="1em">
                    <Btn onClick={()=> (setShowComunicados(!showComunicados))}>COMUNICADOS</Btn> 
                    {showComunicados && (
                      <Container>
                        {console.log("asdfasdfasdf",data)}
                        {data.actividades.map((actividad) => (
                         <>
                           <Hr/>
                           <Paragraph>
                              <Flex flex-direction="column" gap="0.5em" align-items="auto">
                               <P> {actividad.nombre}</P>
                                <Flex gap="0.5em" justify-content="center">
                                  <p>{actividad.fecha_inicio}  </p>
                                  <p> {actividad.fecha_fin}</p>
                                </Flex>
                              </Flex>
                           </Paragraph>
                         </>  
                        ))}

                        {/* <Hr/>
                        <Paragraph>El día de mañana se habilitara las inscripciones del dicho evento </Paragraph>
                        <Hr/>
                        <Paragraph>El día de mañana se habilitara las inscripciones del dicho evento </Paragraph>
                        <Hr/>
                        <Paragraph>El día de mañana se habilitara las inscripciones del dicho evento </Paragraph>
                        <Hr/>
                        <Paragraph>El día de mañana se habilitara las inscripciones del dicho evento </Paragraph> */}
                      </Container>
                    )}
                </Flex>
                
            </Asided>
        </Flex>
        
        </>
    )
}

export default Visualizacionevento

const Paragraph = styled.div`
  padding-top: 5%;
  color: #000;
  p{
    font-size: 16px;
  }
  
`

const Hr = styled.hr`
  border: solid 1px #787370;
  margin:0;
`

const Container = styled.div`
  padding: 3%;
  border: solid 5px #000;
  border-radius: 10px;
  width: 100%;
  border-top: 5%;
  background-color: #EFEDD6;
  `

const Div = styled.div`
    .p{
        width:max-content;
        
    }
`
const Img = styled.img`
    border-radius: 20px;
    // margin-left: 10%;
    
`

const P =styled.p`
    color: #000;
    font-size: 12px;
    font-weight: bold;
    margin-top:0rem;
    margin-bottom:0rem;
    text-align:center;

    &#auspiciador{
        margin-left:1.1em;
        font-size: 20px;
    }
`/*
const Modal = styled.div`
    position: fixed;
    width:fit-content;
    height:fit-content;
    left: 35%;
    top: 35%;
    background-color: #bfba8a ;
    padding: 2%;
    border-radius:10%;
    border: solid 2px #000;
`
*/
const boton2  = styled.div`
backgroundColor: '#D1741E',  // Color de fondo rojo
borderRadius: '30px',    // Bordes redondeados
padding: '10px 20px',    // Relleno interior
color: 'white',         // Color del texto
fontSize:'20px',
margin: '0.4em',
width:'30%'
`