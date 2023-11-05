import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Organizador.css';
import SearchBar from "../components/Searchbar";
import Itemorg from "../components/Itemorg";
import Btn from "../components/Btn";
import Flex from '../components/Flex';

function Organizador(){
    return(
        <>
            <div>
                <h2 className="tit-lista-org">LISTA DE ORGANIZADORES</h2> 
                <SearchBar />
            </div>
            <div>
                <Itemorg nombre="Facultad de ciencias sociales" rep="Remberto Lopez" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="UMSA Carrera de informatica" rep="JORGE LOPEZ" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
            </div>
            <Flex display="flex" justify-content="flex-end"  >
                <Btn type='submit' font-size="12px" >CREAR ORGANIZADOR</Btn>
            </Flex>
            

        </>
    )
}
export default Organizador;