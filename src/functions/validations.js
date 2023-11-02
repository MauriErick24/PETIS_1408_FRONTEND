export const eventos = (value, options) => {
  const errors = {}

  if(!value.nombre_evento){
    errors.nombre_evento = 'El llenado del siguiente campo es obligatorio'
  }else if (!/^[A-Za-z0-9._%+-\s]+$/.test(value.nombre_evento)) {
    errors.nombre_evento = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if(!value.inicio_inscripcion){
    errors.inicio_inscripcion = 'El llenado del siguiente campo es obligatorio'
  }

  if(!value.fin_inscripcion){
    errors.fin_inscripcion = 'El llenado del siguiente campo es obligatorio'
  }

  if(value.fin_inscripcion<value.inicio_inscripcion){
    errors.fin_inscripcion = 'La fecha final no puede ser menor a la fecha de inscripcion'
  }
  
  if (options.organizador && !/^[A-Za-z\s]+$/.test(value.organizador)) {
    errors.organizador = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.lugar && !/^[A-Za-z0-9._%+-\s]+$/.test(value.lugar)) {
    errors.lugar = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.email && !/^[A-Za-z0-9._%+-\s]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value.email)) {
    errors.email = 'Ingrese una dirección de correo electrónico válida.'
  }

  if(options.telefono && !/^\d{1,8}$/.test(value.telefono)){
    errors.telefono = 'Ingrese un número de teléfono válido de hasta 8 dígitos.'
  }

  // if(options.telefono && !/^[60000000-89999999]$/.test(value.telefono)){
  //   errors.telefono = 'Ingrese un número de teléfono válido'
  // }
  // if(options.hora && !/^[0-24]+:[0-60].[0-999999]$/.test(value.hora)){
  //   errors.hora = 'Ingrese una hora válida.'
  // }

  if (options.descripcion && !/^[A-Za-z0-9._%+-\s]+$/.test(value.descripcion)) {
    errors.descripcion = 'Ingrese solo texto caracteres especiales.'
  }

  if (options.requisitos && !/^[A-Za-z0-9._%+-\s]+$/.test(value.requisito)) {
    errors.requisito = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.integrantes && !/^[0-9]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo números en este campo.'
  }

  if (options.premios && !/^[A-Za-z0-9._%+-\s]+$/.test(value.premio)) {
    errors.premio = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.reglas && !/^[A-Za-z0-9._%+-\s]+$/.test(value.reglas)) {
    errors.reglas = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.detalles && !/^[A-Za-z0-9._%+-\s]+$/.test(value.detalle)) {
    errors.detalle = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.integrantes && !/^[A-Za-z0-9._%+-\s]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.contenido && !/^[A-Za-z0-9._%+-\s]+$/.test(value.contenido)) {
    errors.contenido = 'Ingrese solo texto sin caracteres especiales.'
  }

  if (options.invitados && !/^[A-Za-z0-9._%+-\s]+$/.test(value.invitado)) {
    errors.invitado = 'Ingrese solo texto sin caracteres especiales.'
  }

  return errors
}
