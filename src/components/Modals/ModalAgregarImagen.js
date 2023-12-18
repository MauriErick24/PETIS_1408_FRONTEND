import react, { useState } from 'react'
import InputFilePreview from '../input/InputFilePreview';
import styled from 'styled-components';
import Flex from '../Flex';
import Btn from '../Btn';
import Alert from "../../components/Alert";
import appFirebase from '../../firebase/config';
import {getFirestore,collection,addDoc} from 'firebase/firestore'
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage'

import api from '../../services/api'

const ModalCrearImagen =({idActual, reset, setShowAfiche, setImage,setRefresh,refresh, ...props})=>{
    // console.log(idActual)
    const [imagen, setImagen] = useState(null)
    const [showAlertSuccesful,setShowAlertSuccesful] = useState(false)
  const [showAlertFail,setShowAlertFail] = useState(false)

  const db=getFirestore(appFirebase);
  const storage=getStorage(appFirebase);
  
  let URLimagen;

    const sendData = async() => {
        
        const newAfiches={
            imagenes:URLimagen
        }

        try {
            await addDoc(collection(db,'afiches'),{
                ...newAfiches
            })
        } catch (error) {
            console.log(error)
        }

        const refArchivo=ref(storage,`afiches/${imagen.name}`)
        await uploadBytes(refArchivo,imagen)
        URLimagen=await getDownloadURL(refArchivo)
        console.log(URLimagen)

        let dataToSend = null;
            //dataToSend = {idActual, imagen}
            dataToSend={idActual,URLimagen}
            console.log(dataToSend)
            console.log(imagen.name)
            
        try {
            const response = await api.post('/api/cambiarImagen', dataToSend,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'enctype':'multipart/form-data'
                  },
            })
            setShowAlertSuccesful(true)
            setRefresh(!refresh)
            console.log(response)
            
        } catch (error) {
            console.log(error)
            setShowAlertFail(true)
        }
    }   

    return(
        <>
        <Alert message="Se ha guardado correctamente"
                 onAcept={()=>{setShowAlertSuccesful(false);setShowAfiche(false)}}
                 show={showAlertSuccesful}
          />

          <Alert message="Sucedio un error inesperado al guardar"
                 onAcept={()=>setShowAlertFail(false)}
                 show={showAlertFail}
          />

        <Div {...props}>
            <Flex flex-direction='column' align-items='center'>
                <p>ASIGNAR AFICHE</p>
                <InputFilePreview
                    buttonText="SELECCIONAR IMAGEN"
                    name='file'
                    widthDiv='100%'
                    width= '400px'
                    reset={reset}
                    onChange={(images)=>{setImagen(images.target.value)}}
                />
                <Flex top='10px' margin-bottom='10px' gap='2em'>
                    <Btn onClick={() => {sendData(); }}>ACEPTAR</Btn>
                    <Btn onClick={() => {setShowAfiche(false)}} color='second'>CANCELAR</Btn>
                </Flex>
            </Flex>

        </Div>
        </>
    )
}

export default ModalCrearImagen;

const Div = styled.div`
    
    position: fixed;
    left: 40%;
    top: 25%;
    display: flex;
    padding: 2em;

    background-color: #D1D0BC;
    border: solid 2px #000;

    border-radius: 30px;

    p{
        font-weight: bold;
        font-size: 25px;
    }
`