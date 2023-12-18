
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
    }else if(values.nombre.length < 2){
        errors.nombre = 'debe tener 2 o mas caracteres'
    }else if(values.nombre.length > 50){
        errors.nombre = 'debe tener 50 caracteres o menos'
    }else if(!/^[a-zA-Z\s]+$/i.test(values.nombre)){
        errors.nombre = 'solo deben ser letras'
    }

    if(!values.email){
        errors.email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'formato de email invalido'
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
    }else if(values.direccion.length < 5){
        errors.direccion = 'debe tener 5 o mas caracteres'
    }else if(values.direccion.length > 50){
        errors.direccion = 'debe tener 50 o menos caracteres'
    }else if(!/^[a-zA-Z0-9º\s]+$/i.test(values.direccion)){
        errors.direccion = 'Debe tener solo letras y numeros'
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
               message="SE HA REGISTRADO CORRECTAMENTE"
               onAcept={()=>{setShowAlert(false)}} 
               show={showAlert}
            />  

            <Alert
               message="HA SUCEDIDO UN ERROR INESPERADO AL GUARDAR"
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
                        <label><span style={{color:"red"}}>*</span></label>
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
                        <label><span style={{color:"red"}}>*</span></label>
                        <input type="text" name="representante" id="representante" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.representante}/>  
                        {formik.touched.representante && formik.errors.representante ? <div className="error">{formik.errors.representante}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label class="one" for="email">Email : </label>
                        <label><span style={{color:"red"}}>*</span></label>
                        <input type="email" name="email" id="email" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.Email}/>  
                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label className="one" for="telefono">Telefono : </label>
                        <label><span style={{color:"red"}}>*</span></label>
                        <input type="number" name="telefono" id="telefono" onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} value={formik.values.telefono}min='0'/>  
                        {formik.touched.telefono && formik.errors.telefono ? <div className="error">{formik.errors.telefono}</div> : null}
                    </Div>
                    <Div className = "cajita">
                        <label class="one" for="direccion">Direccion : </label>
                        <label><span style={{color:"red"}}>*</span></label>
                        <input type="text" 
                        name="direccion" 
                        id="direccion"
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.direccion}
                        />
                        {formik.touched.direccion && formik.errors.direccion ? <div className="error">{formik.errors.direccion}</div> : null}
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
    justify-content:center;
    margin-bottom: 10px;
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
  
 input[type= "text"], [type= "email"],[type="number"]{
    width:47%;
    height: 31px;
    border-radius: 15px;
  }
`
