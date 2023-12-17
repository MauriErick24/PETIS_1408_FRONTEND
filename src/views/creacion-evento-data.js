import styled from 'styled-components'
import Btn from '../components/Btn'
import Flex from '../components/Flex'
import BorderContent from '../components/BorderContent'
import HeaderTitle from '../components/HeaderTitle'
import Input from '../components/input/Input'
import Select from '../components/input/Select'
import TextArea from '../components/input/TextArea'
import Radio from '../components/input/Radio'

import { useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFilePreview from '../components/input/InputFilePreview'
import Alert from '../components/Alert'
import Confirm from '../components/Confirm'

import { Formik } from 'formik'
import { initialEvento } from '../functions/form'
import { eventos } from '../functions/validations'

import ErrorMessage from '../components/ErrorMessage'
import Inputd from '../components/input/Inputd'
import Inputk from '../components/input/Inputk'

import api from '../services/api'

const CreacionEvento = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { options } = location.state

  const [ showp, setShowp ] = useState(false)

  const [ show, setShow ] = useState({
    alert1: false,
    confirm1: false,
    alert2: false,
    confirm2: false
  })

  const [data, setData] = useState(
//     { 
//       nombre_evento:"evento prueba",
//       inicio_inscripcion:"2023-10-04",
//       fin_inscripcion:"2023-11-21",
//       fin_evento:"2023-12-1",
//       organizador:"jalasoft",
//       imagen:"assests/images/umss-logo.png",
//       lugar:"coña coña",
//       email:"pretencioso@gmail.com",
//       descripcion:"este es un evento",
//       hora:"09:00:00.0000000",
//       telefono:"78327438",
//       requisito:"traer malcriadas",
//       premio:[],
//       reglas:"no ser gay",
//       detalle:"blba bla bla",
//       afiche:"nose que es un afiche",
//       contenido:"este es el contenido del evento",
//       invitado:"shrek",
//       tipoEvento_id:4
// }
  )

  const sendData = async() => {
    try{
     const response = await api.post('/api/evento', data);
      console.log("Post")
    }catch(err){
      console.log("Error: ", err)
    }
  }

  const RedText = styled.p`
  color: red;`;
  

  return (
    <>
      <Alert
        show={show.alert1}
        onAcept={() => {
          setShow((state) => ({...state, alert1: !show.alert1}))
          navigate('/')
          navigate('/')
        }}
        
        message='Evento creado correctamente'
        
      />

      <Confirm
        message='¿Esta seguro de crear este evento?'
        show={show.confirm1}
        onClose={() => setShow((state) => ({...state, confirm1: !show.confirm1}))}
        onAcept={() => {
          setShow((state) => ({...state, confirm1: !show.confirm1}))
          setShow((state) => ({...state, alert1: !show.alert1}))
          console.log(data)
          sendData();
        }}
      />

      {/* cancelar */}
      <Alert
        show={show.alert2}
        onAcept={() => {
          setShow((state) => ({...state, alert2: !show.alert2}))
        }}
        message='Evento creado correctamente'
      />

      <Confirm
        title='¿Desea salir?'
        message='No se guardaran los cambios'
        show={show.confirm2}
        onClose={() => setShow((state) => ({...state, confirm2: !show.confirm2}))}
        onAcept={() => {
          setShow((state) => ({...state, confirm2: !show.confirm2}))
          setShow((state) => ({...state, alert2: !show.alert2}))
          navigate('/')
        }}
      />

      <Formik
        initialValues={initialEvento}
        validate= {(value)=> eventos(value,options)}
        onSubmit={(value) => {
          setShow((state) => ({...state, confirm1: !show.confirm1}))
          setData(value)
          
          /*navigate('/')*/
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
          <form>
            <HeaderTitle title='CREACION DE EVENTO'/>
            <BorderContent>
              <Content justify-content='space-between' width='100%' gap='1em'>
                <Flex flex-direction='column' gap='1.2em' width='80%'>

                  <Inputk 
                    label='Nombre de evento:'
                    name='nombre_evento'
                    value={values.nombre_evento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.nombre_evento && errors.nombre_evento && (
                    <ErrorMessage>{errors.nombre_evento}</ErrorMessage>
                  )}

                  <Select
                    label='Tipo de evento : *'
                    onClick={(e) => {
                      const selectedValue = e.target.value;
                      console.log(selectedValue);
                      values.tipoEvento_id = parseInt(selectedValue);
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
                              value={values.inicio_inscripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              column
                            />
                            {touched.inicio_inscripcion && errors.inicio_inscripcion && (
                              <ErrorMessage>{errors.inicio_inscripcion}</ErrorMessage>
                            )}
                          </Flex>
                          
                          <Flex flex-direction='column'>
                            <Inputd
                              name='fin_inscripcion'
                              type='date' 
                              label='Fin'
                              value={values.fin_inscripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              column 
                            />
                            {touched.fin_inscripcion && errors.fin_inscripcion && (
                              <ErrorMessage>{errors.fin_inscripcion}</ErrorMessage>
                            )}
                          </Flex>
                      </Flex>

                       <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            disabled={!options.hora}
                            value={values.hora}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )}

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            disabled={!options.hora}
                            value={values.hora}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )}
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
                              value={values.inicio_inscripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              column
                            />
                            {touched.inicio_inscripcion && errors.inicio_inscripcion && (
                              <ErrorMessage>{errors.inicio_inscripcion}</ErrorMessage>
                            )}
                          </Flex>
                          
                          <Flex flex-direction='column' >
                            <Inputd
                              name='fin_inscripcion'
                              type='date' 
                              label='Fin'
                              value={values.fin_inscripcion}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              column 
                            />
                            {touched.fin_inscripcion && errors.fin_inscripcion && (
                              <ErrorMessage>{errors.fin_inscripcion}</ErrorMessage>
                            )}
                          </Flex>
                      </Flex>

                      <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            disabled={!options.hora}
                            value={values.hora}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )}

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            disabled={!options.hora}
                            value={values.hora}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )}
                       </Flex>

                      </Flex>
                     </Container>
                    </Flex>
                  <Flex flex-direction='row' width='100%' align-items='center' gap='0.5em'>
                    <Input 
                      name='organizador'
                      label='Organizador(es):'
                      disabled={!options.organizador}
                      value={values.organizador}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Btn type='button' font-weight='bold'
                      onClick={()=>console.log("Agregando organizador")}>+</Btn>
                    {touched.organizador && errors.organizador && (
                      <ErrorMessage>{errors.organizador}</ErrorMessage>
                    )}
                  </Flex>
                  {/* width='100%' */}
                  <Flex justify-content='space-between'  gap='1em'>
                    <Flex flex-direction='column' gap='1em'>
                      <Inputd
                        name='lugar'
                        label='Lugar: ' 
                        disabled={!options.lugar}
                        value={values.lugar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputWidth={'380px'}
                      />
                      {touched.lugar && errors.lugar && (
                        <ErrorMessage>{errors.lugar}</ErrorMessage>
                      )}

                      <Inputd
                        name='email'
                        label='E-mail: ' 
                        disabled={!options.email} 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputWidth={'390px'}
                      />
                      {touched.email && errors.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      )}
                    </Flex>
                    
                    <Flex flex-direction='column' gap='1em'>
                      

                      <Inputd
                        name='telefono'
                        label='Telefono: '
                        disabled={!options.telefono}
                        value={values.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputWidth={'350px'}
                      />
                      {touched.telefono && errors.telefono && (
                        <ErrorMessage>{errors.telefono}</ErrorMessage>
                      )}
                    </Flex>
                  </Flex>

                  <Flex justify-content='space-between' width='100%' gap='1em'>
                    <Flex width='480px' flex-direction='column'>
                      <TextArea
                        name='descripcion'
                        value={values.descripcion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label='Descripción:' 
                        disabled={!options.descripcion}
                        inputWidth={'400px'}
                      />
                      {touched.descripcion && errors.descripcion && (
                        <ErrorMessage>{errors.descripcion}</ErrorMessage>
                      )}
                    </Flex>
                    
                    <Flex width='480px' flex-direction='column'>
                      <TextArea
                        name='requisito'
                        value={values.requisito}
                        label='Requisitos:'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!options.requisitos} 
                      />
                      {touched.requisito && errors.requisito && (
                        <ErrorMessage>{errors.requisito}</ErrorMessage>
                      )}
                    </Flex>
                  </Flex>
                </Flex>

                <Flex flex-direction='column' gap='1.2em' width='20%'>
                  <h2 className='title-btn-file center'>Imagen del evento</h2>
                  <InputFilePreview 
                    name='file' 
                    buttonText='SELECCIONAR UNA IMAGEN'
                    width='200px'
                    font-size='18px'
                  />

                  <Flex padding='0 1em' top='0.5em' flex-direction='column' width='100%'>
                    <h2 className='title-btn-file'>Elige tu tipo de participantes <RedText>*</RedText></h2>
                    <Flex flex-direction='column' top='1em' gap='0.5em'>
                      <Radio check={!showp} name='participantes' label='Individual' onChange={() => setShowp(!showp)} />
                      <Radio check={showp} name='participantes' label='Equipo' onChange={() => setShowp(!showp)} />
                    </Flex>
                  </Flex>

                  {
                    showp && (
                      <Flex padding='0 1em' top='0.2em' flex-direction='column' width='100%'>
                        <h2 className='title2-btn-file'>Numero de integrantes por equipo</h2>
                        <Flex top='0.1em' width='100px' flex-direction='column'>
                          <Input 
                            type='number'
                            name='integrantes'
                            value={values.integrantes}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.integrantes && errors.integrantes && (
                            <ErrorMessage>{errors.integrantes}</ErrorMessage>
                          )}
                        </Flex>
                      </Flex>
                    )
                  }
                </Flex>
              </Content>

              <Flex gap='1em' top='1em'>
                <Flex flex-direction='column' width='100%'>
                  <TextArea
                    name='premio'
                    value={values.premio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Premios:' disabled={!options.premios} 
                  />
                  {touched.premio && errors.premio && (
                    <ErrorMessage>{errors.premio}</ErrorMessage>
                  )}
                </Flex>

                <Flex flex-direction='column' width='100%'>
                  <TextArea
                    name='reglas'
                    label='Reglas:'
                    value={values.reglas}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    disabled={!options.reglas}
                  />
                  {touched.reglas && errors.reglas && (
                    <ErrorMessage>{errors.reglas}</ErrorMessage>
                  )}
                </Flex>

                <Flex flex-direction='column' width='100%'>
                  <TextArea 
                    name='detalle'
                    label='Detalles:'
                    value={values.detalle}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    disabled={!options.detalles} 
                  />
                  {touched.detalle && errors.detalle && (
                    <ErrorMessage>{errors.detalle}</ErrorMessage>
                  )}
                </Flex>
              </Flex>

              <Flex gap='1em' top='1em'>
                {
                  options.afiche && (
                    <Flex flex-direction='column' align-items='center' width='100%' gap='0.5em'>
                      <p>Afiche:</p>
                      <InputFilePreview
                        name='file2' 
                        buttonText='SELECCIONAR UNA IMAGEN'
                        width='200px'
                        font-size='1.2em'
                      />
                    </Flex>
                  )
                }
                <Flex flex-direction='column' width='100%'>
                  <TextArea
                    name='contenido'
                    value={values.contenido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Contenido:'
                    disabled={!options.contenido} 
                  />
                  {touched.contenido && errors.contenido && (
                    <ErrorMessage>{errors.contenido}</ErrorMessage>
                  )}
                </Flex>
                
                <Flex flex-direction='column' width='100%'>
                  <TextArea
                    name='invitado'
                    value={values.invitado}
                    label='Invitados Especiales:'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={!options.invitados} 
                  />
                  {touched.invitado && errors.invitado && (
                    <ErrorMessage>{errors.invitado}</ErrorMessage>
                  )}
                </Flex>
              </Flex>
            </BorderContent>
            <Flex top='1em' justify-content='center' gap='10em'>
              <Btn type='submit' onClick={handleSubmit}>ACEPTAR</Btn>
              <Btn type='button' onClick={() => {
                setShow((state) => ({...state, confirm2: !show.confirm2}))
                
                }} color='second'>CANCELAR</Btn>
            </Flex>
          </form>
        )}
      </Formik>
    </>
  )
}

export default CreacionEvento

const Content = styled(Flex)`
  display: flex;
  justify-content: center;
  /* padding: 1em 3em; */

  .img{
    width: 100%;
    max-width: 300px;
  }

  .img-label{
    width: 100%;
    max-width: 100px;
  }

  .title-btn-file{
    width: 100%;
    font-weight: 400;
    font-size: 1.125rem;
  }

  .title2-btn-file{
    width: 100%;
    font-weight: 300;
    font-size: 1rem;
  }

  .center{
    text-align: center;
  }
`
const Asterisk = styled.p`
  color:red;
`
const Container = styled.div`
  border: solid 0.2em #000;
  padding: 1em;
`