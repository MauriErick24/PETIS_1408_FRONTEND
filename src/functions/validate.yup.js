import * as Yup from 'yup'

const requerido = 'Este campo es requerido'

export const LoginSchema = Yup.object().shape({
  usuario: Yup.string().required(requerido),
  password: Yup.string().required(requerido)
})

export const RegisterSchema = Yup.object().shape({
  nombres: Yup.string().required(requerido),
  apellidos: Yup.string().required(requerido),
  email: Yup.string()
            .email('Correo electronico invalido')
            .required(requerido),

  password: Yup.string()
                .min(8, 'Este campo debe tener minimo 8 caracteres')
                .required(requerido),

  fecha_nacimiento: Yup.date().required(requerido),
  usuario: Yup.string().required(requerido),

  telefono: Yup.string()
                .matches(
                  /^[0-9]{7,8}$/,
                  'Número de teléfono no válido'
                )
                .required(requerido),
  imagen: Yup.mixed().required('Selecciona una imagen')
})