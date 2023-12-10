import React, {useState} from 'react'
import Flex from '../Flex'
import Title from '../Fonts/Title'
import styled from 'styled-components'
import { Formik } from 'formik'
//import { Input } from 'reactstrap'
import Input from '../input/Input'
import InputFilePreview from '../input/InputFilePreview'
import Btn from '../Btn'
import Confirm from '../Confirm'
import ErrorMessage from '../ErrorMessage'
import Alert from '../Alert'

import api from '../../services/api'

const ModalEditarAuspiciador = ({closeModal, data}) => {

  const [auspiciador, setAuspiciador] = useState(data)

  const [modalConfirmarCancelar, setModalConfirmarCancelar] = useState(false)
  const [modalConfirmarGuardar,setModalConfirmarGuardar] = useState(false)
  const [modalErrorGuardar, setModalErrorGuardar] = useState(false)

  const validate = (values) => {
    let errors = {}
    if(!values.email){
      errors.email = 'Requerido'
    }else if(!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(values.email)){
      errors.email = 'formato invalido para el correo'
    }

    if(!values.direccion){
      errors.direccion = 'Requerido'
    }else if(values.direccion.length < 1){
        errors.direccion = 'Debe contener mas'
    }else if(values.direccion.length > 50){
        errors.direccion = 'Debe contener 50 caracteres o menos'
    }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.lugar)){
        errors.direccion = 'Solo letras y numeros'
    }

    if(!values.telefono){
      errors.telefono = 'Requerido'
    }

    return errors;

  }

  const handleSubmit = (values) => {
    console.log(values)
    sendData(values);
  }

  const sendData = async(values)=>{
    try {
      const response = await api.post(`/api/auspiciadores/${values.id}`, {...values,"_method":"PUT"},
        {headers: {
          'Content-Type': 'multipart/form-data',
          'enctype':'multipart/form-data'}}
      )
      setModalConfirmarGuardar(true)
    } catch (error) {
      console.log(error)
      setModalErrorGuardar(true)
    }
  }


  return (
    <Div>

      <Confirm
        message='LOS CAMBIOS QUE HA REALIZADO NO SERÁN GUARDADOS'
        show={modalConfirmarCancelar}
        onClose={() => setModalConfirmarCancelar(false)}
        onAcept={() => closeModal(false)}
      />

      <Alert
        message='LOS CAMBIOS SE HAN GUARDADO'
        show={modalConfirmarGuardar}
        onAcept={() => {closeModal(false)}}
      />

    <Alert
        message='HA SUCEDIDO UN ERROR AL GUARDAR LOS CAMBIOS'
        show={modalErrorGuardar}
        onAcept={() => {setModalErrorGuardar(false)}}
      />


      <Flex flex-direction='column' align-items='center'>
        <Title >AUSPICIADOR</Title>
      </Flex>
      
      <Formik
        initialValues={data}
        handleChange={(values)=>console.log(values)}
        validate={validate}
        onSubmit={handleSubmit}
      >
      
        {({values, handleChange, handleSubmit, touched, errors})=>(

          <form onSubmit={() => console.log("Guardar")}>
            <Flex flex-direction='column' gap='1em'>
              <Input
                label='E-mail:'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
               {touched.email && errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null} 

              <Input
                label='Telefono:'
                name='telefono'
                type='number'
                value={values.telefono}
                onChange={handleChange}
              />
              {touched.telefono && errors.telefono ? <ErrorMessage>{errors.telefono}</ErrorMessage> : null} 


              <Input
                label='Direccion:'
                name='direccion'
                value={values.direccion}
                onChange={handleChange}
              />
              {touched.direccion && errors.direccion ? <ErrorMessage>{errors.direccion}</ErrorMessage> : null} 
            </Flex>
            
           <Flex align-items='center' top='2em'>
            <P>Logotipo del auspiciador</P>
            <InputFilePreview
                name='imagen' 
                buttonText='Seleccionar una imagen'
                width='200px'
                font-size='1.2em'
                imagen={data.imagen}
                onChange={handleChange}
              />
           </Flex>
            <Flex justify-content='center' top='2em' gap='2em'>
              <Btn type='button'onClick={handleSubmit} >GUARDAR</Btn>
              <Btn type='button' color='second' onClick={()=>{setModalConfirmarCancelar(true)}}>CANCELAR</Btn>
            </Flex>
          </form>
        )}
      </Formik>

     
    </Div>
  )
}

export default ModalEditarAuspiciador

const Div = styled.div`
  background-color: #d1d0bc;
  border: solid 3px #000;
  border-radius: 10px;
  padding: 2%;
  position: fixed;
  left: 35%;
  top: 25%;
  width: 50%;
` 
const P = styled.p`
  color: black;
  font-weight: bold;
`