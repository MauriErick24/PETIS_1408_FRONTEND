import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components";

import '../assets/css/Organizador.css';
import SearchBar from "../components/Searchbar";
import Itemorg from "../components/Itemorg";
import Btn from "../components/Btn";
import Flex from '../components/Flex';
import HeaderTitle from "../components/HeaderTitle";
import Itemgen from "../components/Itemgen";

function Organizador(){

    const datos=[
        {
            nombre:"JALASOFT",
            rep:'JORGE LOPEZ',
            correo:'mcar@gmail.com',
            telf:'4245535'
        },
        {
            nombre:"UMSA INFORMATICA",
            rep:'Mario Caceres',
            correo:'mcar@gmail.com',
            telf:'4245535'
        },
        {
            nombre:"JALASOFT",
            rep:'Mario Caceres',
            correo:'mcar@gmail.com',
            telf:'4245535'
        }
    ]

    return(
        <>
            <div>
                <HeaderTitle title='ORGANIZADORES'/> 
                <SearchBar label='Nombre del organizador :' />
            </div>
            <Flex flex-direction='column' justify-content='space-around' gap='5px' align-items='normal' margin-bottom='5px'>
                {datos.map((elemento)=>(
                    <Itemgen showImage={false}>
                        <Table>
                            <tr>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.rep}</td>
                                <td>{elemento.correo}</td>
                                <ld>{elemento.telf}</ld>
                            </tr>
                        </Table>
                    </Itemgen>
                ))}

                {/* <Itemorg nombre="JALASOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="UMSA INFORMATICA" rep="JORGE LOPEZ" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/>
                <Itemorg nombre="JALA SOFT" rep="Mario Caceres" correo= "mcar@gmail.com" telef="4245535"/> */}

            </Flex>
            <Flex display="flex" justify-content="flex-end"  >
                <Btn type='submit' font-size="12px" >CREAR ORGANIZADOR</Btn>
            </Flex>
            

        </>
    )
}
export default Organizador;

const Table = styled.table`
    tr{
        width:100%;
    }
`