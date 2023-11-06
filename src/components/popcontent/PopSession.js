import { useState } from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginSchema } from '../../functions/validate.yup'
import { initialLogin } from '../../functions/form'

// components
import Pop from '../Pop'
import InputField from '../input/InputField'
import Flex from '../Flex'
import Btn from '../Btn'
import Alert from '../Alert'

const PopSession = ({ pop, setPop, onClick }) => {

  const [show, setShow] = useState(false) 

  const onSubmit = (values) => {
    // datos para backend
    console.log('datos enviados', values)
    setPop(!pop)
    setShow(!show)
  }

  return(
    <>
      <Alert
        show={show}
        message='No se reconoce al usuario la contraseña, revise los campos.'
        onAcept={() => setShow(!show)}
      />
      <Pop
        setState={setPop}
        state={pop}
        width='480px'
      >
        <h2>INICIAR SESSION</h2>

        <Formik
          initialValues={initialLogin}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {
            (({ handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <Flex top='10px' flex-direction='column' gap='10px'>
                  <InputField
                    style={{ padding:'12px 10px',border: 'solid 2px #000'}}
                    label='Usuario'
                    name='usuario'
                    placeholder='Ingresa tu usuario'
                    error={errors.usuario}
                    column
                  />

                  <InputField
                    style={{ padding:'12px 10px',border: 'solid 2px #000'}}
                    label='Contraseña'
                    name='password'
                    type='password'
                    placeholder='Ingresa tu contraseña'
                    error={errors.password}
                    column
                  />

                  <Flex 
                    top='15px'
                    width='100%'
                    justify-content='space-between'
                    align-items='center'
                  >
                    <BtnCustom color='second' type='submit'>LOG IN</BtnCustom>

                    <Enlace to='/'>¿No tiene cuenta?</Enlace>
                    <BtnCustom type='button' onClick={onClick}>
                      REGISTRARSE
                    </BtnCustom>
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

export default PopSession

const BtnCustom = styled(Btn)`
  font-size: 18px;
`
const Enlace = styled(Link)`
  color: black;
  text-decoration: none;
`
