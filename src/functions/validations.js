export const eventos = (value, options) => {

  const errors = {}

  if(!value.nombre){
    errors.nombre = 'El llenado del siguiente campo es obligatorio'
  }else if (!/^[A-Za-z]+$/.test(value.nombre)) {
    errors.nombre = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if(!value.fecha_inicial){
    errors.fecha_inicial = 'El llenado del siguiente campo es obligatorio'
  }

  if(!value.fecha_final){
    errors.fecha_final = 'El llenado del siguiente campo es obligatorio'
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

  if (options.requisitos && !/^[A-Za-z]+$/.test(value.requisitos)) {
    errors.requisitos = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.integrantes && !/^[0-9]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo números en este campo.'
  }

  if (options.premios && !/^[A-Za-z]+$/.test(value.premios)) {
    errors.premios = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.reglas && !/^[A-Za-z]+$/.test(value.reglas)) {
    errors.reglas = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.detalles && !/^[A-Za-z]+$/.test(value.detalles)) {
    errors.detalles = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.integrantes && !/^[A-Za-z]+$/.test(value.integrantes)) {
    errors.integrantes = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.contenido && !/^[A-Za-z]+$/.test(value.contenido)) {
    errors.contenido = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  if (options.invitados && !/^[A-Za-z]+$/.test(value.invitados)) {
    errors.invitados = 'Ingrese solo texto sin números ni caracteres especiales.'
  }

  return errors
}
