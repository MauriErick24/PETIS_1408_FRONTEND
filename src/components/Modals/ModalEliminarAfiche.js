import react, { useEffect, useState } from 'react'
import InputFilePreview from '../input/InputFilePreview';
import styled from 'styled-components';
import Flex from '../Flex';
import Btn from '../Btn';
import Confirm from '../Confirm'
import Imgn from '../../assets/images/example-img.jpg'
import Alert from '../Alert'

import api from '../../services/api'

const ModalEliminarAfiches =({idActual, reset, setShowAfiche, closeModal,setImage,setRefresh,refresh, ...props})=>{
    // console.log(idActual)
  const [imagen, setImagen] = useState(null)
  const [modalConfirmarCancelar, setModalConfirmarCancelar] = useState(false)
  const [modalConfirmarGuardar,setModalConfirmarGuardar] = useState(false)
  const [modalErrorGuardar, setModalErrorGuardar] = useState(false)
    let [data,setData]=useState([
        {
        id:"",
        imagen:Imgn
        }
    ]);

    useEffect(() => {

        const fetchData = async () => {
          try {
           const response = await api.get(`/api/evento/${idActual}`);
            setData(response.data);
            setImagen(response.data.imagen);
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          //} finally {
            //setLoading(false); 
          }
        };
        //console.log(data)
        fetchData();
      }, []); 

    const sendData = async() => {
            let dataToSend = null;
            dataToSend = {idActual, imagen}
            console.log(dataToSend)
        try {
            const response = await api.delete(`/api/afiches/${idActual}`)
            console.log(response)
            console.log(modalConfirmarGuardar)
            setModalConfirmarGuardar(true);
            console.log(modalConfirmarGuardar)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error)
            setModalErrorGuardar(true)
        }
    }   

    return(
        
        

        <Div {...props}>

        <Confirm
        message='LOS CAMBIOS QUE HA REALIZADO NO SERÁN GUARDADOS'
        show={modalConfirmarCancelar}
        onClose={() => setModalConfirmarCancelar(false)}
        onAcept={() => closeModal(false)}
      />

      <Alert
        message='LOS CAMBIOS SE HAN GUARDADO'
        show={modalConfirmarGuardar}
        onAcept={() => {closeModal(false);setShowAfiche(false)}}
      />

    <Alert
        message='HA SUCEDIDO UN ERROR AL GUARDAR LOS CAMBIOS'
        show={modalErrorGuardar}
        onAcept={() => {setModalErrorGuardar(false)}}
      />
            <Flex flex-direction='column' align-items='center'>
                <p>ELIMINAR AFICHE</p>
                <Img src={imagen}/>
                <Flex top='10px' margin-bottom='10px' gap='2em'>
                    <Btn onClick={() => {sendData();}}>ACEPTAR</Btn>
                    <Btn onClick={() => {setShowAfiche(false);setModalConfirmarCancelar(true)}} color='second'>CANCELAR</Btn>
                </Flex>
            </Flex>

        </Div>
        
    )
    
}

export default ModalEliminarAfiches;

const Img = styled.img`
  width: 200px;
  height: 200px:
`

const Div = styled.div`
    
    position: fixed;
    left: 35%;
    top: 25%;
    display: flex;
    padding: 2em;
    height:auto;

    background-color: #D1D0BC;
    border: solid 2px #000;

    border-radius: 30px;

    p{
        font-weight: bold;
        font-size: 25px;
    }
    
`