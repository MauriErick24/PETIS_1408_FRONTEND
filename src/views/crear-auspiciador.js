import React, { useState } from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
import api from '../services/api';
import validaciones from '../functions/Validacionesaus';
import { Formik, useFormik } from "formik";

const CrearPatrocinador = ({ onClick }) => {

    const initialValues = {
        nombre: '',
        empresa:'',
        direccion:'',
        email:'',
        telefono: '',
        imagen:'',
    }

    const validate = values => {

    }

    // const formik = useFormik({
    //     initialValues:initialValues,
    //     onSubmit:(values) => {
    //         //* sendData(values)
    //         console.log(values)
    //     },
    //     validate: validate
    // })

    const sendData = (values) => {
        console.log(values)
    }
    
    return (
        <>
            <Flex justify-content='center' margin-bottom='2%'>
                <HeaderTitle title='AUSPICIADOR' />
            </Flex>

         <Formik
              initialValues={initialValues}
              validate= {validate}
              onSubmit={console.log}
         >
            {({values, handleSubmit, handleChange, touched}) => (
                <form onSubmit={handleSubmit}>
                    <Flex flex-direction="column" align-items='center'>
                    <Inputk
                        label='Nombre de auspiciador:'
                        name='nombre'
                        justify_content='end'
                        onChange={handleChange}
                        />

                    <Inputk
                        label='Empresa u Organización:'
                        name='empresa'
                        justify_content='end'
                        onChange={handleChange}
                    /> 

                    <Inputk
                        label='E-mail:'
                        name='email'
                        justify_content='end'
                        onChange={handleChange}
                    /> 

                    <Inputk
                        label='Teléfono:'
                        name='telefono'
                        justify_content='end'
                        onChange={handleChange}
                    /> 

                    <Inputk
                        label='Dirección'
                        name='direccion'
                        justify_content='end'
                        onChange={handleChange}
                    /> 
                </Flex>

                <Flex flex-direction='row' flex-start='center' justify-content='center' gap='1.2em' align-items='center' margin='2em' margin-bottom='2em'>
                    <h2 className='title-btn-file center'>Imagen de auspiciador</h2>
                
                    <InputFilePreview
                        name='imagen'
                        buttonText='Selecciona una imagen'
                        width='200px'
                        widthDiv='auto'
                        font-size='18px'
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
