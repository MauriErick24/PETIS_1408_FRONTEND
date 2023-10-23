export const eventos = (value, options) => {
  const errors = {}

  if(!value.nombre_evento){
    errors.nombre_evento = 'El llenado del siguiente campo es obligatorio'
  }else if (!/^[A-Za-z]+$/.test(value.nombre_evento)) {
    errors.nombre_evento = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if(!value.inicio_inscripcion){
    errors.inicio_inscripcion = 'El llenado del siguiente campo es obligatorio'
  }

  if(!value.fin_inscripcion){
    errors.fin_inscripcion = 'El llenado del siguiente campo es obligatorio'
  }

  
  if (options.organizador && !/^[A-Za-z]+$/.test(value.organizador)) {
    errors.organizador = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.lugar && !/^[A-Za-z]+$/.test(value.lugar)) {
    errors.lugar = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.email && !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.email)) {
    errors.email = 'Ingrese una dirección de correo electrónico válida.'
  }

  if(options.telefono && !/^\d{1,8}$/.test(value.telefono)){
    errors.telefono = 'Ingrese un número de teléfono válido de hasta 8 dígitos.'
  }

  if (options.descripcion && !/^[A-Za-z]+$/.test(value.descripcion)) {
    errors.descripcion = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.descripcion && !/^[A-Za-z]+$/.test(value.descripcion)) {
    errors.descripcion = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.requisito && !/^[A-Za-z]+$/.test(value.requisito)) {
    errors.requisito = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.integrantes && !/^[0-9]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo números en este campo.'
  }

  if (options.premio && !/^[A-Za-z]+$/.test(value.premio)) {
    errors.premio = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.reglas && !/^[A-Za-z]+$/.test(value.reglas)) {
    errors.reglas = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.detalle && !/^[A-Za-z]+$/.test(value.detalle)) {
    errors.detalle = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.integrantes && !/^[A-Za-z]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.contenido && !/^[A-Za-z]+$/.test(value.contenido)) {
    errors.contenido = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.invitado && !/^[A-Za-z]+$/.test(value.invitado)) {
    errors.invitado = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  return errors
}
