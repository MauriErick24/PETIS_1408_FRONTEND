import React, { useState } from "react";
import Flex from "../components/Flex";
import HeaderTitle from "../components/HeaderTitle";
import Inputk from "../components/input/Inputk";
import InputFilePreview from "../components/input/InputFilePreview";
import Btn from "../components/Btn";
import api from '../services/api';
import validaciones from '../functions/Validacionesaus';

const CrearPatrocinador = ({ onClick }) => {
    const [mensajeError, setMensajeError] = useState({
        nombreAError: '',
        empresaError: '',
        emailError: '',
        telefonoError: '',
        direccionError: '',
    });

    const [auspiciadorDatos, setAuspiciadorDatos] = useState({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        direccion: '',
        imagen: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'nombre':
                const nombreRes = validaciones.validarNombre(value);
                setMensajeError((mensajeError) => ({ ...mensajeError, nombreAError: nombreRes }));
                if (nombreRes === "") {
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: value,
                    }));
                } else {
                    const nombreNew = value.replace(/[^a-zA-Z\s]/g, '').substring(0, 30);
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: nombreNew,
                    }));
                }
                break;

            case 'empresa':
                const empresaRes = validaciones.validarNombre(value);
                setMensajeError((mensajeError) => ({ ...mensajeError, empresaError: empresaRes }));
                if (empresaRes === "") {
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: value,
                    }));
                } else {
                    const empresaNew = validaciones.devolverNombre(value);
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: empresaNew,
                    }));
                }
                break;

            case 'telefono':
                const telefonoRes = validaciones.validarTelefono(value);
                setMensajeError((mensajeError) => ({ ...mensajeError, telefonoError: telefonoRes }));
                if (telefonoRes === "") {
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: value,
                    }));
                } else {
                    const telefonoNew = validaciones.devolverTelefono(value);
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: telefonoNew,
                    }));
                }
                break;

            case 'email':
                const correo = validaciones.validarCorreo(value);
                if (correo !== "") {
                    const datoCorreo = validaciones.devolverCorreo(value);
                    setMensajeError((mensajeError) => ({ ...mensajeError, emailError: correo }));
                } else {
                    setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                        ...prevAuspiciadorDatos,
                        [name]: value,
                    }));
                }
                break;

            case 'direccion':
                const direccionRes = validaciones.validarCampoVacio(value);
                setMensajeError((mensajeError) => ({ ...mensajeError, direccionError: direccionRes }));
                setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                    ...prevAuspiciadorDatos,
                    [name]: value,
                }));
                break;

            default:
                setAuspiciadorDatos((prevAuspiciadorDatos) => ({
                    ...prevAuspiciadorDatos,
                    [name]: value,
                }));
        }
    };

    const sendData = async () => {
        // Validar los datos antes de enviarlos
        // (puedes agregar más validaciones según tus necesidades)
        if (
            mensajeError.nombreAError ||
            mensajeError.empresaError ||
            mensajeError.emailError ||
            mensajeError.telefonoError ||
            mensajeError.direccionError
        ) {
            console.log("Hay errores en el formulario. No se puede enviar.");
            return;
        }

        try {
            // Agrupa todos los datos del formulario en un objeto JSON
            const datosFormulario = {
                ...auspiciadorDatos,
                // Agrega aquí más campos si es necesario
            };
            console.log("Datos del formulario:", datosFormulario);
            // Envia los datos al servidor
            const response = await api.post('/api/auspiciadores', datosFormulario);
            console.log("Post");
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    return (
        <>
            <Flex justify-content='center' margin-bottom='2%'>
                <HeaderTitle title='AUSPICIADOR' />
            </Flex>

            <Flex flex-direction="column" align-items='center'>
                <Inputk
                    label='Nombre de auspiciador:'
                    name='nombre'
                    justify_content='end'
                    onChange={handleChange}
                     /> <p style={{ color: 'red' }}>{mensajeError.nombreAError}</p>

                <Inputk
                    label='Empresa u Organización:'
                    name='empresa'
                    justify_content='end'
                    onChange={handleChange}
                /> <p style={{ color: 'red' }}>{mensajeError.empresaError}</p>

                <Inputk
                    label='E-mail:'
                    name='email'
                    justify_content='end'
                    onChange={handleChange}
                /> <p style={{ color: 'red' }}>{mensajeError.emailError}</p>

                <Inputk
                    label='Teléfono:'
                    name='telefono'
                    justify_content='end'
                    onChange={handleChange}
                /> <p style={{ color: 'red' }}>{mensajeError.telefonoError}</p>

                <Inputk
                    label='Dirección'
                    name='direccion'
                    justify_content='end'
                    onChange={handleChange}
                /> <p style={{ color: 'red' }}>{mensajeError.direccionError}</p>
            </Flex>

            <Flex flex-direction='row' flex-start='center' justify-content='center' gap='1.2em' align-items='center' margin='2em' margin-bottom='2em'>
                <h2 className='title-btn-file center'>Imagen de auspiciador</h2>
                <InputFilePreview
                    name='file'
                    buttonText='Selecciona una imagen'
                    width='200px'
                    widthDiv='auto'
                    font-size='18px'
                />
            </Flex>

            <Flex justify-content='center' gap='1em'>
                <Btn onClick={sendData}>GUARDAR</Btn>
            </Flex>
        </>
    );
};

export default CrearPatrocinador;
