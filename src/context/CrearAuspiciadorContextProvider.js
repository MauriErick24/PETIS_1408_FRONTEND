import React, {useState, createContext} from "react";
import api from '../services/api'

const Context = createContext();

const CrearAuspiciadorContextProvider = ({children}) => {
    const [data, setData] = useState({
        nombre: '',
        empresa:'',
        email: '',
        telefono: '',
        direccion: '',
        imagen: null,
    })

    const handleChange = (name, value) => {
        setData((prevAuspiciadorDatos) => ({
            ...prevAuspiciadorDatos,
            [name]: value,
        }))
    }
    
    const sendData = async() => {
        console.log(data)
        try {
            //const response = await api.post('/api/auspiciadores', auspiciadorDatos);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <Context.Provider value={{data, handleChange ,setData, sendData}}>
 
            {children}
        </Context.Provider>
    )
}


export {CrearAuspiciadorContextProvider, Context as AuspiciadorContext}