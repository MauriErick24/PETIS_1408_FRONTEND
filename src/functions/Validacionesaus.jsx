const errorCaracteresNoPermitidos='Esta intentando ingresar un caracter no permitido';
const errorOchoCaracteres='Este campo no puede superar los 8 caracteres';
const errorTreintaCaracteres='Este campo no puede superar los 30 caracteres';
const errorCincuentaCaracteres='Este campo no puede superar los 50 caracteres';
const errorSieteCaracteres='Este campo no puede ser menor a los 7 caracteres';
const errorSoloNumeros='Solo se permiten caracteres numéricos';
const errorSeleccioneUnaOpcion='Seleccione al menos una opción';
const errorCorreo='Ingrese un correo válido en el formato example@dominio.com';
const errorCorreoCar='Los caracteres espeviales que intenta ingresar son invalidos';
const errorMinOchoCaracteres = 'Este campo no puede ser menor a los 8 caracteres';

const Validaciones = {
  validarCampoVacio: (valor) => {
    if (!valor.trim()) {
      return `Este campo no puede estar vacío.`;
    } else {
      return "";
    }
  },
  validarCampoVacioSeleccionEquipo: (valor) => {
    if (!valor.trim() || valor==="Selecciona un equipo") {
      return `Este campo no puede estar vacío.`;
    } else {
      return "";
    }
  },
 
   validarNombre: (nombre) => {
      const newValueAlpha = nombre.replace(/[^a-zA-Z\s]/g, '').substring(0, 30);
          
      if (nombre.length > 30) {
      return errorTreintaCaracteres;
      } else if (newValueAlpha !== nombre) {
        return errorCaracteresNoPermitidos;       
      } else {
        return '';
      }
    },
   

  devolverNombre:(data)=>{
    const newValueAlpha = data.replace(/[^a-zA-Z\s]/g, '').substring(0, 30);
    return newValueAlpha;
  },


  validarCorreo: (correo) => {

    const correoRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

           if (correo.length > 50) {
          return errorCincuentaCaracteres;
        } else if (!correoRegex.test(correo)) {
          return errorCorreo;
        } else{
           return "";
        }
  },

  devolverCorreo:(correo)=>{
    const cor=correo.replace(/[^a-zA-Z0-9_.@-]/g, '');
    return cor;
  },
  
  validarTelefono: (telefono) => {
    const telefonoRegex = telefono.replace(/[^\d]/g, '').substring(0, 8);
    if (telefono.length > 8) {
      return errorOchoCaracteres;
    } else if (telefonoRegex !== telefono) {
      return errorSoloNumeros;        
    } else if (telefono.length < 8) {
       return errorMinOchoCaracteres;
    } else {
      return "";
    }
  },
  devolverTelefono: (telefono) => {
    const telefonoR = telefono.replace(/[^\d]/g, '').substring(0, 8);
    
      return telefonoR;
  },


};
export default Validaciones;