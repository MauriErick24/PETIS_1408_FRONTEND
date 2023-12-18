import React, { useState } from "react";
import styled from "styled-components";

import api from '../../services/api'

import HeaderTitle from "../../components/HeaderTitle";
import Select from "../../components/input/Select";
import Inputk from "../../components/input/Inputk";
import Inputd from "../../components/input/Inputd";
import Flex from "../../components/Flex";
import Radio from "../../components/input/Radio";
import Input from "../../components/input/Input";
import TextArea from "../../components/input/TextArea";
import Btn from "../../components/Btn";
import Alert from "../../components/Alert";
import {useFormik} from "formik";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Fonts/Title";

let initialValues = {
  nombre_evento: '',
  tipoEvento_id: 1,
  inicio_inscripcion: '',
  fin_inscripcion: '',
  hora_inicio_inscripcion:'',
  hora_fin_inscripcion:'',
  inicio_actividades:'',
  fin_actividades:'',
  hora_inicio_actividades:'',
  hora_fin_actividades:'',

  hora: '',
  lugar: '',
  email: '',
  telefono: '',
  }

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }


  const validate = values => {
    let errors = {}
    if(!values.nombre_evento){
        errors.nombre_evento = 'Requerido'
    }else if(values.nombre_evento.length < 3){
        errors.nombre_evento = 'Debe contener 3 caracteres o mas'
    }else if(values.nombre_evento.length > 50){
        errors.nombre_evento = 'Debe contener 50 caracteres o menos'
    }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.nombre_evento)){
        errors.nombre_evento = 'Solo letras y numeros'
    }

    if(!values.inicio_inscripcion){
        errors.inicio_inscripcion = 'Requerido'
    }

    if(values.inicio_inscripcion>values.fin_inscripcion){
      errors.inicio_inscripcion = 'No se puede poner una fecha anterior'
  }

    if(!values.fin_inscripcion){
        errors.fin_inscripcion = 'Requerido'
    }
    // if(!values.hora){
    //     errors.hora = 'Requerido'
    // }
    if(!values.lugar){
        errors.lugar = 'Requerido'
    }else if(values.lugar.length < 3){
        errors.lugar = 'Debe contener 3 caracteres o mas'
    }else if(values.lugar.length > 50){
        errors.lugar = 'Debe contener 50 caracteres o menos'
    }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.lugar)){
        errors.lugar = 'Solo letras y numeros'
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
    else if(values.telefono < 60000000){
        errors.telefono = 'Por lo menos debe contener 8 numeros'
    }else if(values.telefono > 79999999){
        errors.telefono = 'Debe contener menos numeros'
    }
    
    return errors
  }


const CrearEvento = ({data, eventCreated, idEvento}) => {

  const navigate = useNavigate();
  //console.log("data dentro del evento ",data)

  const initialValuesChecker = () => {
    //console.log("Data en el checker " ,data)
    if(data != null){
      initialValues = data 
    }else{
      initialValues = {
        nombre_evento: '',
        tipoEvento_id: 1,
        inicio_inscripcion: '',
        fin_inscripcion: '',
        hora_inicio_inscripcion:'',
        hora_fin_inscripcion:'',
        inicio_actividades:'',
        fin_actividades:'',
        hora_inicio_actividades:'',
        hora_fin_actividades:'',
        detalle:'',
        hora: '',
        lugar: '',
        email: '',
        telefono: '',
        }
    }

    return initialValues
  }

  const formik = useFormik({
    initialValues:initialValuesChecker(),
    onSubmit: (values) => {
      if(data != null){
        updateData(values)
      }else{
        sendData(values);
      }
      //console.log(values);
    },
    validate: validate,
  });


  const [showAlertSuccesful,setShowAlertSuccesful] = useState(false)
  const[showAlertUpSuccesful,setShowAlertUpSuccesful]=useState(false)
  const [showAlertFail,setShowAlertFail] = useState(false)
  const [showAlertUpFail,setShowAlertUpFail]=useState(false)

  const [showp, setShowp] = useState(false)


  const sendData = async(values) =>{
    console.log(values)
    try {
    //! ESTE EVENTO DEBE DEVOLVER EL ID DEL EVENTO AL HACER EL POST
      const response = await api.post('/api/evento', values) 
      setShowAlertSuccesful(true)
      //idEvento(response.data.id);
    //idEvento(234)
    console.log(values)
    } catch (error) {
      setShowAlertFail(true)
      console.log(error)
    }
  }

  const updateData = async (values) => {
    console.log(values)
    try {
      const response = await api.put(`/api/evento/${data.id}`,values)
      console.log(response.data)
      setShowAlertUpSuccesful(true)
    } catch (error) {
      console.log(error)
      setShowAlertUpFail(true)
    }
  }


  return(
        <Div>    
          <Alert message="SE HA GUARDADO CORRECTAMENTE"
                 onAcept={()=>{setShowAlertSuccesful(false);}}
                 show={showAlertSuccesful}
          />

          <Alert message="SUCEDIO UN ERROR INESPERADO AL GUARDAR"
                 onAcept={()=>setShowAlertFail(false)}
                 show={showAlertFail}
          />

          <Alert message="SE HA ACTUALIZADO CORRECTAMENTE"
                 onAcept={()=>{setShowAlertUpSuccesful(false);}}
                 show={showAlertUpSuccesful}
          />

          <Alert message="SUCEDIO UN ERROR INESPERADO AL ACTUALIZAR"
                 onAcept={()=>setShowAlertUpFail(false)}
                 show={showAlertUpFail}
          />
          

          <form onSubmit={formik.handleSubmit}>
          {console.log("initial values ", formik.initialValues)}

            <Flex justify-content='center' >
               <Title>CREAR EVENTO</Title>
            </Flex>

            <Flex margin='0' flex-direction='column' gap='1em'  align-items='none'>
                <Inputk 
                    label='Nombre de evento:'
                    name='nombre_evento'
                    value={formik.values.nombre_evento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                {formik.touched.nombre_evento && formik.errors.nombre_evento ? <div className='error'>{formik.errors.nombre_evento}</div> : null}    
                <Select
                    name='tipoEvento_id'
                    label='Tipo de evento : *'
                    onClick={(e) => {
                      const selectedValue = e.target.value;
                      console.log(selectedValue);
                      formik.values.tipoEvento_id = parseInt(selectedValue);
                     }}
                />
                <Flex justify-content='space-between' width='100%' gap='1em'>
                  {/* 'space-evenly' */}
                
                  <Container>
                    <Flex flex-direction = 'column' gap='1em'>
                      <Flex flex-direction = 'row'>
                        <p>Evento</p><Asterisk>*</Asterisk>
                      </Flex>
                      <Flex gap = '1em'>
                        <Flex flex-direction='column'>
                            <Inputd
                              name='inicio_actividades'
                              type='date' 
                              label='Inicia'
                              inputWidth={'150px'}
                               value={formik.values.inicio_actividades}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                            //   column
                            />
                            
                            {formik.touched.inicio_inscripcion && formik.errors.inicio_inscripcion ? <div className='error'> {formik.errors.inicio_inscripcion}</div>:null} 
                          </Flex>
                          
                          <Flex flex-direction='column'>
                            <Inputd
                              name='fin_actividades'
                              type='date' 
                              label='Fin'
                              inputWidth={'150px'}
                               value={formik.values.fin_actividades}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                            //   column 
                            />                            
                            {formik.touched.fin_inscripcion && formik.errors.fin_inscripcion ? <div className='error'>{formik.errors.fin_inscripcion}</div>:null} 
                          </Flex>
                      </Flex>

                       <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora_inicio_actividades'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                             value={formik.values.hora_inicio_actividades}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'120px'}
                            // value={formik.values.hora}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                          />
                          
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 

                          <Inputd
                            name='hora_fin_actividades'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'150px'}
                             value={formik.values.hora_fin_actividades}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                          />
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 
                       </Flex>

                    </Flex>
                  </Container>
                 
                  <Container>
                    <Flex flex-direction ='column' gap='1em'>
                    <Flex flex-direction = 'row' >
                        <p>Inscripción</p><Asterisk>*</Asterisk>
                      </Flex>
                      <Flex gap='1em'>
                        <Flex flex-direction='column'>
                            <Inputd
                              name='inicio_inscripcion'
                              type='date' 
                              label='Inicia'
                              inputWidth={'150px'}
                               value={formik.values.inicio_inscripcion}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               //column
                            />
                            {formik.touched.inicio_inscripcion && formik.errors.inicio_inscripcion ? <div className='error'>{formik.errors.inicio_inscripcion}</div>:null} 
                          </Flex>
                          
                          <Flex flex-direction='column' >
                            <Inputd
                              name='fin_inscripcion'
                              type='date'
                              inputWidth={'150px'} 
                              label='Fin'
                               value={formik.values.fin_inscripcion}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                            //   column 
                            />
                            {formik.touched.fin_inscripcion && formik.errors.fin_inscripcion ? <div className='error'>{formik.errors.fin_inscripcion}</div>:null} 
                          </Flex>
                      </Flex>

                    <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora_inicio_inscripcion'
                            label='Hora: ' 
                            type='time' 
                            inputWidth={'120px'}
                            //120
                             value={formik.values.hora_inicio_inscripcion}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                          />
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 

                          <Inputd
                            name='hora_fin_inscripcion'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'120px'}
                             value={formik.values.hora_fin_inscripcion}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}

                          />
                          {formik.touched.hora && formik.errors.hora ?<div className='error'>{formik.errors.hora}</div>:null} 
                    </Flex>                 
                    </Flex>
                    </Container>
                </Flex>   

                <Flex flex-direction='column' gap='1em'>
                        <Inputd
                            name='lugar'
                            label='Lugar: ' 
                            // disabled={!options.lugar}
                             value={formik.values.lugar}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                            inputWidth={'100%'}
                        />
                      {formik.touched.lugar && formik.errors.lugar ? <div className='error'>{formik.errors.lugar}</div>:null} 
                    </Flex>
                    <Flex flex-direction='row' gap='1em'>
                        
                        <Inputd
                                name='email'
                                label='E-mail: ' 
                                // disabled={!options.email} 
                                 value={formik.values.email}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                inputWidth={'100%'}
                            />
                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div>:null} 
                        
                        <Inputd
                            name='telefono'
                            label='Telefono: '
                            type='number'
                         // disabled={!options.telefono}
                            value={formik.values.telefono}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            inputWidth={'100%'}
                        />
                        {formik.touched.telefono && formik.errors.telefono ? <div className='error'>{formik.errors.telefono}</div>:null}
                    </Flex>
                    
                <Flex flex-direction='row'>
                    <Flex padding='0 1em' top='0.5em' flex-direction='column' width='100%' gap='1em'>
                        <P>Elige tu tipo de participantes</P>
                        <Flex flex-direction='column' top='1em' gap='0.5em'>
                        <Radio check={!showp} name='participantes' label='Individual' onChange={() => setShowp(!showp)} />
                        <Radio check={showp} name='participantes' label='Equipo' onChange={() => setShowp(!showp)} />
                        {/* <Radio check={null} name='participantes' label='Individual'  />
                        <Radio check={null} name='participantes' label='Equipo' /> */}
                        </Flex>
                    
                        {
                        //showp 
                        showp&&(
                        <Flex padding='0 1em' top='0.2em' flex-direction='column' width='100%' gap='1em'>
                            <P >Numero de integrantes por equipo</P>
                            <Flex top='0.1em' width='100px' flex-direction='column'>
                            <Input 
                                type='number'
                                name='integrantes'
                                min='2'
                                // value={values.integrantes}
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                            />
                            {/* {touched.integrantes && errors.integrantes && (
                                <ErrorMessage>{errors.integrantes}</ErrorMessage>
                            )} */}
                            </Flex>
                        </Flex>
                        )
                    }
                    
                    </Flex>
                    

                    <Flex flex-direction='column' width='100%'>
                    <TextArea 
                        name='detalle'
                        label='Detalles:'
                         value={formik.values.detalle}
                        onChange={formik.handleChange}
                        // onBlur={handleBlur} 
                        // disabled={!options.detalles} 
                    />
                    {/* {touched.detalle && errors.detalle && (
                        <ErrorMessage>{errors.detalle}</ErrorMessage>
                    )} */}
                    </Flex>
                </Flex>
            </Flex>

          <Flex justify-content='center' top='2em' gap='1em'>
            <Btn type='submit'onClick={initialValuesChecker()}>GUARDAR</Btn>
            <Btn color = 'second' onClick={()=> navigate('/gestionar-eventos') }>CANCELAR</Btn>
          </Flex>
          </form>

        </Div>

    )
}

export default CrearEvento;

const Div = styled.div`
    width: 100%;
    height: fit-content;
    gap=1em;
    .error{
      color:red;
      font-size: 14px;
    }
`
const Asterisk = styled.p`
  color:red;
`
const Container = styled.div`
  border: solid 0.2em #000;
  padding: 1em;
`

const P = styled.p`
    font-size: 20px;
`

