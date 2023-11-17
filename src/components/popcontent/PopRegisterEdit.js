import { useState } from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { initialRegister } from '../../functions/form'
import { RegisterSchema } from '../../functions/validate.yup'

// components
import Pop from '../Pop'
import Flex from '../Flex'
import InputField from '../input/InputField'
import Btn from '../Btn'
import InputFilePreview from '../input/InputFilePreview'
import Confirm from '../Confirm'

const PopRegisterEdit = ({ pop, setPop, onClick }) => {

  const [ confirm, setConfirm ] = useState(false)
  
  const onSubmit = (values) => {
    console.log(values)
    setPop(!pop)
  }

  const handleConfirm = (submitForm) => {
    setConfirm(!confirm)
    submitForm()
  }

  return(
    <>
      <Pop
        state={pop}
        setState={setPop}
        width='900px'
      >
        <h2>REGISTRO DE USUARIO</h2>
        <Formik
          initialValues={initialRegister}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
        >
          {
            (({ handleSubmit, errors, submitForm }) => (
              <form onSubmit={handleSubmit}>
                <Confirm
                  show={confirm}
                  message='Se va a registrar esta seguro de continuar.'
                  onAcept={() => handleConfirm(submitForm)}
                  onClose={() => setConfirm(!confirm)}
                />
                <Flex padding='0px 0px 20px 0px' gap='20px' top='30px' justify-content='space-between'>
                  <Flex flex-direction='column' gap='20px' width='300px'>
                    <InputField
                      name='nombres'
                      label='Nombres'
                      placeholder='Ingresa tu nombre'
                      error={errors.nombres}
                      column
                      asterisk
                    />

                    <InputField
                      name='apellidos'
                      label='Apellidos'
                      placeholder='Ingresa tu apellido'
                      error={errors.apellidos}
                      column
                      asterisk
                    />

                    <InputField
                      name='email'
                      label='Correo electrónico'
                      placeholder='Ingresa tu correo'
                      error={errors.email}
                      column
                      asterisk
                    />

                    <InputField
                      name='password'
                      type='password'
                      label='Contraseña'
                      placeholder='Ingresa tu contraseña'
                      error={errors.password}
                      column
                      asterisk
                    />
                  </Flex>

                  <Flex flex-direction='column' gap='20px'>
                    <InputField
                      name='fecha_nacimiento'
                      type='date'
                      label='Fecha de nacimiento'
                      error={errors.fecha_nacimiento}
                      column
                      asterisk
                    />

                    <InputField
                      name='usuario'
                      label='Nombre de Usuario'
                      placeholder='Ingresa tu usuario'
                      error={errors.usuario}
                      column
                      asterisk
                    />

                    <InputField
                      type='number'
                      name='telefono'
                      label='Telefono'
                      placeholder='Ingresa tu telefono'
                      error={errors.telefono}
                      column
                      asterisk
                    />

                    <Flex gap='10px' top='20px'>
                      <BtnCustom type='button' onClick={() => setConfirm(!confirm)}>REGISTRAR</BtnCustom>
                      <BtnCustom color='second' type='button' onClick={() => setPop(!pop)}>CANCELAR</BtnCustom>
                    </Flex>
                  </Flex>

                  <Flex>
                    <InputFilePreview
                      width='100px'
                      height='100px'
                      name='imagen'
                      buttonText='Insertar Imagen'
                    />
                  </Flex>
                </Flex>

              </form>
            ))
          }
        </Formik>
      </Pop>
    </>
  )
}

export default PopRegisterEdit

const BtnCustom = styled(Btn)`
  font-size: 18px;
`
