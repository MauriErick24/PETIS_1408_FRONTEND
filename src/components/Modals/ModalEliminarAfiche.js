import react, { useEffect, useState } from 'react'
import InputFilePreview from '../input/InputFilePreview';
import styled from 'styled-components';
import Flex from '../Flex';
import Btn from '../Btn';
import Imgn from '../../assets/images/example-img.jpg'

import api from '../../services/api'

const ModalEliminarAfiches =({idActual, reset, setShowAfiche, setImage, ...props})=>{
    // console.log(idActual)
    const [imagen, setImagen] = useState(null)
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
            setData(response.data.afiches);
            console.log(response.data.afiches);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
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

        } catch (error) {
            console.log(error)
        }
    }   

    return(
        <Div {...props}>
            <Flex flex-direction='column' align-items='center'>
                <p>ELIMINAR AFICHE</p>
                {/* <InputFilePreview
                    buttonText="SELECCIONAR IMAGEN"
                    name='file'
                    widthDiv='100%'
                    width= '400px'
                    reset={reset}
                    onChange={(images)=>{setImagen(images.target.value)}}
                /> */}
                {/* {data.imagen.map((imagen)=>
                (
                    <Img src={imagen ? imagen : Imgn}/>
                ))} */}
                <Img src={imagen ? imagen : Imgn}/>
                <Flex top='10px' margin-bottom='10px' gap='2em'>
                    <Btn onClick={() => {sendData(); setShowAfiche(false)}}>ACEPTAR</Btn>
                    <Btn onClick={() => {setShowAfiche(false)}} color='second'>CANCELAR</Btn>
                </Flex>
            </Flex>

        </Div>
    )
}

export default ModalEliminarAfiches;

const Img = styled.img`
  width: 50px;
  height: 50px:
`

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