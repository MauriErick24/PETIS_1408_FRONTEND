
import Btn from "../../components/Btn";
import styled from "styled-components";
import Flex from "../../components/Flex";
import { useFormik } from 'formik';
import { useState } from "react";
import Alert from "../../components/Alert";
import api from '../../services/api'
import Title from "../../components/Fonts/Title";

const initialValues = {
    nombre: '',
    representante: '',
    email: '',
    telefono: '',
    direccion: '',
    }


const validate = values => {
    let errors = {}
    if(!values.nombre){
        errors.nombre = 'Required'
    }else if(values.nombre.length < 10){
        errors.nombre = 'Must be 10 characters or more'
    }else if(values.nombre.length > 50){
        errors.nombre = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z\s]+$/i.test(values.nombre)){
        errors.nombre = 'Must be only letters'
    }

    if(!values.email){
        errors.email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }

    // if(!values.representante){
    //     errors.representante = 'Required'
    // }else if(values.representante.length < 12){
    //     errors.representante = 'Must be 12 characters or more'
    // }else if(values.representante.length > 50){
    //     errors.representante = 'Must be 50 characters or less'
    // }else if(!/^[a-zA-Z\s]+$/i.test(values.representante)){
    //     errors.representante = 'Must be only letters'
    // }

    if(!values.telefono){
        errors.telefono = 'Required'
    }else if(values.telefono.length < 8){
        errors.telefono = 'Debe ser 8 caracteres o mas'
    }else if(values.telefono.length > 10){
        errors.telefono = 'Debe ser 10 caracteres o menos'
    }else if(!/^[0-9]+$/i.test(values.telefono)){
        errors.telefono = 'Debe ser solo numeros'
    }

    if(!values.direccion){
        errors.direccion = 'Required'
    }else if(values.direccion.length < 10){
        errors.direccion = 'Must be 10 characters or more'
    }else if(values.direccion.length > 50){
        errors.direccion = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z0-9º\s]+$/i.test(values.direccion)){
        errors.direccion = 'Debe ser letras y numeros'
    }
    return errors
}




function CrearOrganizador(){

    const [showAlert, setShowAlert] = useState(false)
    const [showAlertError, setShowAlertError] = useState(false)

    const sendData = async(values) => {
        try {
            const response = await api.post('/api/organizadores', values)
            setShowAlert(true)
        } catch (error) {
            console.log(error)
            setShowAlertError(true)
        }
    }
    
    const onSubmit = values => {
        // alert(JSON.stringify(values, null, 2));
        console.log(values)
        sendData(values)
    }


    const formik = useFormik({
        initialValues,
        onSubmit, 
        validate 
    })
   
    return(
        <>
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
            
            <form onSubmit={formik.handleSubmit}>
                <Div class= "contenedor">
                    <Div className="cont">
                       <Title>CREAR ORGANIZADOR</Title>
                    </Div>
                    
                    <Div className = "cajita">
                        <label class="one" for="organizador">Nombre de organizador : </label>
                        <input type="text" 
                        name="nombre" 
                        id="nombre"
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.nombre}
                        />
                        {formik.touched.nombre && formik.errors.nombre ? <div className="error">{formik.errors.nombre}</div> : null}
                    </Div>
                    
                    <Div className = "cajita">
                        <label class="one" for="representante">Representante legal : </label>
                        <input type="text" name="representante" id="representante" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.representante}/>  
                        {formik.touched.representante && formik.errors.representante ? <div className="error">{formik.errors.representante}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label class="one" for="email">Email : </label>
                        <input type="email" name="email" id="email" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.Email}/>  
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label className="one" for="telefono">Telefono : </label>
                        <input type="text" name="telefono" id="telefono" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.telefono}/>  
                        {formik.touched.telefono && formik.errors.telefono ? <div className="error">{formik.errors.telefono}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label class="one" for="organizador">Direccion : </label>
                        <input type="text" 
                        name="direccion" 
                        id="direccion"
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.direccion}
                        />
                        {formik.touched.organizador && formik.errors.direccion ? <div className="error">{formik.errors.direccion}</div> : null}
                    </Div>
                    <Flex justify-content='center' gap="3em">
                        <Btn type="submit">AGREGAR</Btn>
                        {/* <Btn color='second'>CANCELAR</Btn> */}
                    </Flex>
                </Div>
            </form>  
        </>
    )
}

export default CrearOrganizador;

const Div = styled.div`
.cajita{
    display: flex;
    margin-bottom: 15px;
    position: relative;
  }
  .one{
    width: 195px; /* Ancho fijo para las etiquetas */
    text-align: right; /* Alinea el texto a la derecha */
    margin-right: 5px;
    font-size:17.5px;
    height: 35px;
  }

  .error{
    color: red;
    font-size: 14px;
    position: absolute;
    left:30%;
    top:80%;
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

  .cont h1 {
    font-size: 28px;
    color: white;
    margin: 0; 
    background-color: black;
    padding: 10px 20px; 
  }
  
 input[type= "text"], [type= "email"]{
    width:47%;
    height: 31px;
    border-radius: 15px;
  }
`