import React from "react";
import styled from "styled-components";

import HeaderTitle from "../components/HeaderTitle";
import Select from "../components/input/Select";
import Inputk from "../components/input/Inputk";
import Inputd from "../components/input/Inputd";
import Flex from "../components/Flex";

const CrearEvento = () => {
    return(
        <Div>
            <Flex justify-content='center'>
                <HeaderTitle title='CREACION DE EVENTO'/> 
            </Flex>
            <Flex margin='1%' flex-direction='column' gap='1em'  align-items='none'>
                <Inputk 
                    label='Nombre de evento:'
                    name='nombre_evento'
                    // value={values.nombre_evento}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    />
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
                            //   value={values.inicio_inscripcion}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   column
                            />
                            {/* {touched.inicio_inscripcion && errors.inicio_inscripcion && (
                              <ErrorMessage>{errors.inicio_inscripcion}</ErrorMessage>
                            )} */}
                          </Flex>
                          
                          <Flex flex-direction='column'>
                            <Inputd
                              name='fin_inscripcion'
                              type='date' 
                              label='Fin'
                            //   value={values.fin_inscripcion}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   column 
                            />
                            {/* {touched.fin_inscripcion && errors.fin_inscripcion && (
                              <ErrorMessage>{errors.fin_inscripcion}</ErrorMessage>
                            )} */}
                          </Flex>
                      </Flex>

                       <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {/* {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )} */}

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {/* {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )} */}
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
                            //   value={values.inicio_inscripcion}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   column
                            />
                            {/* {touched.inicio_inscripcion && errors.inicio_inscripcion && (
                              <ErrorMessage>{errors.inicio_inscripcion}</ErrorMessage>
                            )} */}
                          </Flex>
                          
                          <Flex flex-direction='column' >
                            <Inputd
                              name='fin_inscripcion'
                              type='date' 
                              label='Fin'
                            //   value={values.fin_inscripcion}
                            //   onChange={handleChange}
                            //   onBlur={handleBlur}
                            //   column 
                            />
                            {/* {touched.fin_inscripcion && errors.fin_inscripcion && (
                              <ErrorMessage>{errors.fin_inscripcion}</ErrorMessage>
                            )} */}
                          </Flex>
                      </Flex>

                    <Flex flex-direction='row' gap='0.5em'>
                        <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {/* {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )} */}

                          <Inputd
                            name='hora'
                            label='Hora: ' 
                            type='time' 
                            // disabled={!options.hora}
                            // value={values.hora}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'90px'}
                          />
                          {/* {touched.hora && errors.hora && (
                            <ErrorMessage>{errors.hora}</ErrorMessage>
                          )} */}
                    </Flex>                 
                    </Flex>
                    </Container>
                </Flex>   

                <Flex flex-direction='column' gap='1em'>
                        <Inputd
                            name='lugar'
                            label='Lugar: ' 
                            // disabled={!options.lugar}
                            // value={values.lugar}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            inputWidth={'100%'}
                        />
                      {/* {touched.lugar && errors.lugar && (
                        <ErrorMessage>{errors.lugar}</ErrorMessage>
                      )} */}

                    </Flex>
                    <Flex flex-direction='row' gap='1em'>
                        
                        <Inputd
                                name='email'
                                label='E-mail: ' 
                                // disabled={!options.email} 
                                // value={values.email}
                                // onChange={handleChange}
                                // onBlur={handleBlur}
                                inputWidth={'100%'}
                            />
                        {/* {touched.email && errors.email && (
                            <ErrorMessage>{errors.email}</ErrorMessage>
                        )} */}
                        
                        <Inputd
                            name='telefono'
                            label='Telefono: '
                         // disabled={!options.telefono}
                         // value={values.telefono}
                         // onChange={handleChange}
                         // onBlur={handleBlur}
                            inputWidth={'100%'}
                        />
                        {/* {touched.telefono && errors.telefono && (
                                <ErrorMessage>{errors.telefono}</ErrorMessage>
                            )} */}
                    </Flex>

            </Flex>
        </Div>

        
    )
}

export default CrearEvento;

const Div = styled.div`
    width: 100%;
    gap=1em;
`
const Asterisk = styled.p`
  color:red;
`
const Container = styled.div`
  border: solid 0.2em #000;
  padding: 1em;
`