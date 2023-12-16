import React, { useState } from "react";
import Flex from "../../components/Flex";
import HeaderTitle from "../../components/HeaderTitle";
import Inputk from "../../components/input/Inputk";
import InputFilePreview from "../../components/input/InputFilePreview";
import Btn from "../../components/Btn";
import api from '../../services/api';
import validaciones from '../../functions/Validacionesaus';
import { Formik, useFormik } from "formik";
import Confirm from '../../components/Confirm';
import Alert from '../../components/Alert';
import ErrorMessage from "../../components/ErrorMessage";
import Title from "../../components/Fonts/Title";

const CrearPatrocinador = ({ onClick }) => {

    const [showAlert, setShowAlert] = useState(false)
    const [showAlertError, setShowAlertError] = useState(false)
    const [initialValues, setInitialValues] = useState(
         {
            nombre: '',
            empresa:'',
            direccion:'',
            email:'',
            telefono: '',
            imagen:'',
        }
    )

    // const initialValues = {
    //     nombre: '',
    //     empresa:'',
    //     direccion:'',
    //     email:'',
    //     telefono: '',
    //     imagen:'',
    // }

    const validate = values => {
        let errors = {}
        if(!values.nombre){
            errors.nombre = 'Requerido'
        }else if(values.nombre.length < 15){
            errors.nombre = 'Debe contener 15 caracteres o mas'
        }else if(values.nombre.length > 50){
            errors.nombre = 'Debe contener 50 caracteres o menos'
        }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.nombre)){
            errors.nombre = 'Solo letras y numeros'
        }
    
        if(!values.empresa){
            errors.empresa = 'Requerido'
        }
        if(!values.empresa){
            errors.empresa = 'Requerido'
        }
        // if(!values.hora){
        //     errors.hora = 'Requerido'
        // }
        if(!values.direccion){
            errors.direccion = 'Requerido'
        }else if(values.direccion.length < 15){
            errors.direccion = 'Debe contener 15 caracteres o mas'
        }else if(values.direccion.length > 50){
            errors.direccion = 'Debe contener 50 caracteres o menos'
        }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.lugar)){
            errors.direccion = 'Solo letras y numeros'
        }
    
        if(!values.email){
            errors.email = 'Requerido'
        }else if(!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(values.email)){
            errors.email = 'formato invalido para el correo'
        }
    
        if(!values.telefono){
            errors.telefono = 'Requerido'
        }
        // else if(!/^[0-9]{10}$/.test(values.telefono)){
        //     errors.telefono = 'formato invalido para el telefono'
        // }
        else if(values.telefono.length < 8){
            errors.telefono = 'Por lo menos debe contener 8 numeros'
        }else if(values.telefono.length > 8){
            errors.telefono = 'Debe contener menos numeros'
        }
        
        return errors
      }

    // const formik = useFormik({
    //     initialValues:initialValues,
    //     onSubmit:(values) => {
    //         //* sendData(values)
    //         console.log(values)
    //     },
    //     validate: validate
    // })

    const sendData = async(values) => {
        console.log(values)
        try {
           const response = await api.post('/api/auspiciadores', values,
           {
            headers: {
              'Content-Type': 'multipart/form-data',
              'enctype':'multipart/form-data'
            },
          })
            console.log(response.data) 
            setShowAlert(true)
        } catch (error) {
            console.log(error)
            setShowAlertError(true)

        }
    }

    const handleSubmit = (values, {resetForm}) => {
        sendData(values);
        //resetForm({values: initialValues})
    }
    
    return (
        <>
            <Flex justify-content='center' margin-bottom='2%'>
               <Title>CREAR AUSPICIADOR</Title>
            </Flex>
        
            <Alert
               message="Se ha registrado correctamente"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />  

            <Alert
               message="Ha sucedido un error inesperado al guardar"
               onAcept={()=>{setShowAlertError(false)}} 
               show={showAlertError}
            />          
        

         <Formik
              initialValues={initialValues}
              validate= {validate}
              onSubmit={handleSubmit}
         >
            {({values, handleSubmit, handleChange, touched, errors}) => (
                <form onSubmit={handleSubmit}>
                    <Flex flex-direction="column" align-items='center'>
                    <Inputk
                        label='Nombre de auspiciador:'
                        name='nombre'
                        justify_content='end'
                        onChange={handleChange}
                        />
                    {touched.nombre && errors.nombre ? <ErrorMessage>{errors.nombre}</ErrorMessage> : null}    

                    <Inputk
                        label='Empresa u Organización:'
                        name='empresa'
                        justify_content='end'
                        onChange={handleChange}
                    /> 
                    {touched.empresa && errors.empresa ? <ErrorMessage>{errors.empresa}</ErrorMessage> : null}  

                    <Inputk
                        label='E-mail:'
                        name='email'
                        justify_content='end'
                        onChange={handleChange}
                    /> 
                    {touched.email && errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}  

                    <Inputk
                        label='Teléfono:'
                        name='telefono'
                        type='number'
                        justify_content='end'
                        min='1' 
                        pattern='^[0-9]+'
                        onChange={handleChange}
                    /> 
                    {touched.telefono && errors.telefono ? <ErrorMessage>{errors.telefono}</ErrorMessage> : null}  

                    <Inputk
                        label='Dirección'
                        name='direccion'
                        justify_content='end'
                        onChange={handleChange}
                    /> 
                    {touched.direccion && errors.direccion ? <ErrorMessage>{errors.direccion}</ErrorMessage> : null}  
                </Flex>

                <Flex flex-direction='row' flex-start='center' justify-content='center' gap='1.2em' align-items='center' margin='2em' margin-bottom='2em'>
                    <h2 className='title-btn-file center'>Imagen de auspiciador</h2>
                
                    <InputFilePreview
                        name='imagen'
                        buttonText='Selecciona una imagen'
                        width='200px'
                        widthDiv='auto'
                        font-size='18px'
                        reset={true}
                        onChange={handleChange}
                    />
                </Flex>

                <Flex justify-content='center' gap='1em'>
                    <Btn type='submit' onClick={handleSubmit}>GUARDAR</Btn>
                </Flex>

                </form>
            )}

        </Formik>

            
            
        </>
    );
};

export default CrearPatrocinador;
