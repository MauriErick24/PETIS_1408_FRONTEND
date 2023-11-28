import react, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import Btn from '../Btn'

const ModalEquipos = ({isSelected, showModal}) => {


    const [selected, setSelected] = useState(1)

    const [data, setData] = useState([
        {id:1, nombre: "EQUIPO Z", cantidad: 2},
        {id:2, nombre: "EQUIPO x", cantidad: 2},
        {id:3, nombre: "EQUIPO A", cantidad: 2},
        {id:4, nombre: "EQUIPO B", cantidad: 2},

    ])
    
    const [equipos, setEquipos] = useState({})

    const handleSelected = (idEquipo) => {
        console.log("equipo seleccionado: ", idEquipo);
        // setSelected(ftry)
        isSelected(true)
        showModal(false);
    }

    return(
        <Div>
          <Flex flex-direction='column'  align-items='center'>
            <h2>ELIJA EL EQUIPO</h2>
            <Container>
                {data.map((equipo) => (
                    <>
                      <Equipo onClick={()=>handleSelected(equipo.id)}>
                        <p>{equipo.nombre}</p>
                        <p>{equipo.cantidad}US</p>
                      </Equipo>
                      <Linea/>
                    </>
                ))}
            </Container>
            <Flex gap='1em'>
                <Btn onClick={()=>handleSelected(1)}>ACEPTAR</Btn>
                <Btn color='second' onClick={()=> showModal(false)}>CANCELAR</Btn>
            </Flex>
          </Flex>
        </Div>
    )
}
export default ModalEquipos

const Linea = styled.div`
    border: solid 2px #000;
    width: 400px;
    margin-left: 4%;
    margin-top: 1%;
    margin-bottom: 1%
`

const Equipo = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    height: 20%;

    &:hover{
        background-color: #a6a9b6;
        cursor: pointer;
        border-radius: 20px;
        border-left: 20%;
    }
`

const Container = styled.div`
    background-color: #d1d0bc;
    width: 450px;
    margin: 10px;
    height: 260px;
    overflow:auto;
    align-items: center;

    p{
        font-size: 34px;
    }
`

const Div = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;
    background-color: #bfba8a;
    border-radius: 40px;
    padding: 2%;
    width: 500px;
    height: 400px;

    h2{
        font-size: 34px;
    }
`
