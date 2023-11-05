
import Btn from "../components/Btn";
import styled from "styled-components";
import Flex from "../components/Flex";
import { useFormik } from 'formik';

const initialValues = {
    organizador: '',
    representante: '',
    Email: '',
    Telefono: '',
    Direccion: '',
    }
const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
}

const validate = values => {
    let errors = {}
    if(!values.organizador){
        errors.organizador = 'Required'
    }else if(values.organizador.length < 10){
        errors.organizador = 'Must be 10 characters or more'
    }else if(values.organizador.length > 50){
        errors.organizador = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z\s]+$/i.test(values.organizador)){
        errors.organizador = 'Must be only letters'
    }

    if(!values.Email){
        errors.Email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)){
        errors.Email = 'Invalid email format'
    }

    if(!values.representante){
        errors.representante = 'Required'
    }else if(values.representante.length < 12){
        errors.representante = 'Must be 12 characters or more'
    }else if(values.representante.length > 50){
        errors.representante = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z\s]+$/i.test(values.representante)){
        errors.representante = 'Must be only letters'
    }

    if(!values.Telefono){
        errors.Telefono = 'Required'
    }else if(values.Telefono.length < 8){
        errors.Telefono = 'Debe ser 8 caracteres o mas'
    }else if(values.Telefono.length > 10){
        errors.Telefono = 'Debe ser 10 caracteres o menos'
    }else if(!/^[0-9]+$/i.test(values.Telefono)){
        errors.Telefono = 'Debe ser solo numeros'
    }

    if(!values.Direccion){
        errors.Direccion = 'Required'
    }else if(values.Direccion.length < 10){
        errors.Direccion = 'Must be 10 characters or more'
    }else if(values.Direccion.length > 50){
        errors.Direccion = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z0-9º\s]+$/i.test(values.Direccion)){
        errors.Direccion = 'Debe ser letras y numeros'
    }
    return errors
}


function Corganizador(){
    const formik = useFormik({
        initialValues,
        onSubmit, 
        validate 
    })
   
    return(
        <form onSubmit={formik.handleSubmit}>
            <Div class= "contenedor">
                <Div className="cont">
                    <h1>CREACION DE ORGANIZADOR</h1> 
                </Div>
                
                <Div className = "cajita">
                    <label class="one" for="organizador">Nombre de organizador : </label>
                    <input type="text" 
                    name="organizador" 
                    id="organizador"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.organizador}
                     />
                     {formik.touched.organizador && formik.errors.organizador ? <div className="error">{formik.errors.organizador}</div> : null}
                </Div>
                
                <Div className = "cajita">
                    <label class="one" for="representante">Representante legal : </label>
                    <input type="text" name="representante" id="representante" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} value={formik.values.representante}/>  
                    {formik.touched.representante && formik.errors.representante ? <div className="error">{formik.errors.representante}</div> : null}
                </Div>
                <Div className = "cajita">
                    <label class="one" for="Email">Email : </label>
                    <input type="email" name="Email" id="Email" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} value={formik.values.Email}/>  
                    {formik.touched.Email && formik.errors.Email ? <div className="error">{formik.errors.Email}</div> : null}
                </Div>
                <Div className = "cajita">
                    <label className="one" for="Telefono">Telefono : </label>
                    <input type="text" name="Telefono" id="Telefono" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} value={formik.values.Telefono}/>  
                    {formik.touched.Telefono && formik.errors.Telefono ? <div className="error">{formik.errors.Telefono}</div> : null}
                </Div>
                <Div className = "cajita">
                    <label class="one" for="organizador">Direccion : </label>
                    <input type="text" 
                    name="Direccion" 
                    id="Direccion"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.Direccion}
                     />
                     {formik.touched.organizador && formik.errors.Direccion ? <div className="error">{formik.errors.Direccion}</div> : null}
                </Div>
                <Flex justify-content='end' gap="3em">
                    <Btn >AGREGAR</Btn>
                    <Btn color='second'>CANCELAR</Btn>
                </Flex>
            </Div>
        </form>  
    )
}

export default Corganizador;

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
