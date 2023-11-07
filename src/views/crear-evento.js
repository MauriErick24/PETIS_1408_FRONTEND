import React from "react";
import styled from "styled-components";

import HeaderTitle from "../components/HeaderTitle";
import Select from "../components/input/Select";
import Inputk from "../components/input/Inputk";
import Inputd from "../components/input/Inputd";
import Flex from "../components/Flex";
import Radio from "../components/input/Radio";
import Input from "../components/input/Input";
import TextArea from "../components/input/TextArea";
import {useFormik} from "formik";

const initialValues = {
  nombre_evento: '',
  inicio_inscripcion: '',
  fin_inscripcion: '',
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
        errors.nombre_evento = 'Required'
    }else if(values.nombre_evento.length < 15){
        errors.nombre_evento = 'Must be 15 characters or more'
    }else if(values.nombre_evento.length > 50){
        errors.nombre_evento = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.nombre_evento)){
        errors.nombre_evento = 'Solo letras y numeros'
    }

    if(!values.inicio_inscripcion){
        errors.inicio_inscripcion = 'Required'
    }
    if(!values.fin_inscripcion){
        errors.fin_inscripcion = 'Required'
    }
    if(!values.hora){
        errors.hora = 'Required'
    }
    if(!values.lugar){
        errors.lugar = 'Required'
    }else if(values.lugar.length < 15){
        errors.lugar = 'Must be 15 characters or more'
    }else if(values.lugar.length > 50){
        errors.lugar = 'Must be 50 characters or less'
    }else if(!/^[a-zA-Z0-9\s]+$/i.test(values.lugar)){
        errors.lugar = 'Solo letras y numeros'
    }

    if(!values.email){
        errors.email = 'Required'
    }else if(!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(values.email)){
        errors.email = 'formato invalido para el correo'
    }

    if(!values.telefono){
        errors.telefono = 'Required'
    }else if(!/^[0-9]{10}$/.test(values.telefono)){
        errors.telefono = 'formato invalido para el telefono'
    }else if(values.telefono.length < 8){
        errors.telefono = 'Must be 10 characters or more'
    }else if(values.telefono.length > 8){
        errors.telefono = 'Must be 10 characters or less'
    }
    
    return errors
  }


const CrearEvento = () => {
  const formik = useFormik({
    initialValues,
    onSubmit, 
    validate 
  })
  return(
        <Div>
          <form onSubmit={formik.handleSubmit}>

            <Flex justify-content='center'>
                <HeaderTitle title='CREACION DE EVENTO'/> 
            </Flex>
            <Flex margin='1%' flex-direction='column' gap='1em'  align-items='none'>
                <Inputk 
                    label='Nombre de evento:'
                    name='nombre_evento'
                    value={formik.values.nombre_evento}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                {formik.touched.nombre_evento && formik.errors.nombre_evento ? <div className='error'>{formik.errors.nombre_evento}</div> : null}    
                <Select
                    label='Tipo de evento : *'
                    onClick={(e) => {
                //   const selectedValue = e.target.value;
                //   console.log(selectedValue);
                //   values.tipoEvento_id = parseInt(selectedValue);
                     }}
                />
                <Flex justify-content='space-evenly' width='100%' gap='1em'>
                  <Container>
                    <Flex flex-direction = 'column' gap='1em'>
                      <Flex flex-direction = 'row'>
                        <p>Evento</p><Asterisk>*</Asterisk>
                      </Flex>
                      <Flex gap = '1em'>
                        <Flex flex-direction='column'>
                            <Inputd
                              name='inicio_inscripcion'
                              type='date' 
                              label='Inicia'
                               value={formik.values.inicio_inscripcion}
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                            //   column
                            />
                            
                            {formik.touched.inicio_inscripcion && formik.errors.inicio_inscripcion ? <div className='error'> {formik.errors.inicio_inscripcion}</div>:null} 
                          </Flex>
                          
                          <Flex flex-direction='column'>
                            <Inputd
                              name='fin_inscripcion'
                              type='date' 
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
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                             value={formik.values.hora}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                            inputWidth={'90px'}
                          />
                          
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                             value={formik.values.hora}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                            inputWidth={'90px'}
                          />
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 
                       </Flex>

                    </Flex>
                  </Container>
                 
                  <Container>
                    <Flex flex-direction ='column' gap='1em'>
                    <Flex flex-direction = 'row'>
                        <p>Inscripción</p><Asterisk>*</Asterisk>
                      </Flex>
                      <Flex gap='1em'>
                        <Flex flex-direction='column'>
                            <Inputd
                              name='inicio_inscripcion'
                              type='date' 
                              label='Inicia'
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
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                             value={formik.values.hora}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                            inputWidth={'90px'}
                          />
                          {formik.touched.hora && formik.errors.hora ? <div className='error'>{formik.errors.hora}</div>:null} 

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                             value={formik.values.hora}
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                            inputWidth={'90px'}
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
                        {formik.touched.email && formik.errors.email ?<div className='error'>{formik.errors.email}</div>:null} 
                        
                        <Inputd
                            name='telefono'
                            label='Telefono: '
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
                        {/* <Radio check={!showp} name='participantes' label='Individual' onChange={() => setShowp(!showp)} />
                        <Radio check={showp} name='participantes' label='Equipo' onChange={() => setShowp(!showp)} /> */}
                        <Radio check={null} name='participantes' label='Individual'  />
                        <Radio check={null} name='participantes' label='Equipo' />
                        </Flex>
                    
                        {
                        //showp 
                        true&&(
                        <Flex padding='0 1em' top='0.2em' flex-direction='column' width='100%' gap='1em'>
                            <P >Numero de integrantes por equipo</P>
                            <Flex top='0.1em' width='100px' flex-direction='column'>
                            <Input 
                                type='number'
                                name='integrantes'
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
                        // value={values.detalle}
                        // onChange={handleChange}
                        // onBlur={handleBlur} 
                        // disabled={!options.detalles} 
                    />
                    {/* {touched.detalle && errors.detalle && (
                        <ErrorMessage>{errors.detalle}</ErrorMessage>
                    )} */}
                    </Flex>
                </Flex>
            </Flex>
          </form>

        </Div>

        
    )
}

export default CrearEvento;

const Div = styled.div`
    width: 100%;
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