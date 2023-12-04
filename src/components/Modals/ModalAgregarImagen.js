import react, { useState } from 'react'
import InputFilePreview from '../input/InputFilePreview';
import styled from 'styled-components';
import Flex from '../Flex';
import Btn from '../Btn';

import api from '../../services/api'

const ModalCrearImagen =({idActual, reset, setShowAfiche, setImage, ...props})=>{
    // console.log(idActual)
    const [imagen, setImagen] = useState(null)

    const sendData = async() => {

        let dataToSend = null;
            dataToSend = {idActual, imagen}
            console.log(dataToSend)
        try {
            //const response = await api.post('/api/afiche', dataToSend)

        } catch (error) {
            console.log(error)
        }
    }   

    return(
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
                    <Btn onClick={() => {sendData(); setShowAfiche(false)}}>ACEPTAR</Btn>
                    <Btn onClick={() => {setShowAfiche(false)}} color='second'>CANCELAR</Btn>
                </Flex>
            </Flex>

        </Div>
    )
}

export default ModalCrearImagen;

const Div = styled.div`
    
    position: fixed;
    left: 35%;
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