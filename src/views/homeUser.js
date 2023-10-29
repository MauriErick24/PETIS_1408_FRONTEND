import styled from "styled-components";
import Flex from "../components/Flex";
import Evento from "../components/Evento";
import HeaderEventType from "../components/HeaderEventType";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const HomeUser =()=>{
    const navigate = useNavigate();
    const [filtro, setFiltro] = useState('TODOS');

    const evento = {
        nombreTipo_evento: 'TIPO DE EVENTO',
        nombre_evento: 'NOMBRE DEL EVENTO',
        inicio_inscripcion: 'FECHA INICIO EVENTO'
      }

/// verificar que se muestran en el espacio correcto
      const types = [
        {id: 1, nombreTipo_evento: 'TODOS'},
        {id: 2, nombreTipo_evento: 'COMPETENCIA'},
        {id: 3, nombreTipo_evento: 'TALLER'},
        {id: 4, nombreTipo_evento: 'RECLUTAMIENTO'},
        {id: 5, nombreTipo_evento: 'ENTRENAMIENTO'},
        {id: 6, nombreTipo_evento: 'OTROS'},
    ];

    const vivo = 
      [
        {
          id:1,
          nombreTipo_evento: 'COMPETENCIA',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:2,
          nombreTipo_evento: 'TALLER',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:3,
          nombreTipo_evento: 'TALLER',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
      ]
    
    const futuro =
      [
        {
          id:4,
          nombreTipo_evento: 'COMPETENCIA',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:5,
          nombreTipo_evento: 'RECLUTAMIENTO',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:6,
          nombreTipo_evento: 'ENTRENAMIENTO',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
      ]
    

    const pasado = 
      [
        {
          id:7,
          nombreTipo_evento: 'ENTRENAMIENTO',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:8,
          nombreTipo_evento: 'OTROS',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
        {
          id:9,
          nombreTipo_evento: 'RECLUTAMIENTO',
          nombre_evento: 'NOMBRE DEL EVENTO',
          inicio_inscripcion: 'FECHA INICIO EVENTO'
        },
      ]
  
    const changeFiltro = (value) => {
      setFiltro(value)
    }
    

    return(
        <>
        <HeaderEventType types={types} onClick={changeFiltro}/>
        <H1>EVENTOS EN VIVO</H1>
        <Div className="barra"/>
        <Fondo>
          
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-evenly' gap='1em'>
          {filtro === 'TODOS' ? (
            vivo.map((evento) => (
              <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
            ))
          ) : (
            (vivo.filter((evento) => evento.nombreTipo_evento === filtro).length > 0) ? (
              vivo
                .filter((evento) => evento.nombreTipo_evento === filtro)
                .map((evento) => (
                  <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
                ))
            ) : (
              <p>NO HAY EVENTOS DISPONIBLES PARA ESTE FILTRO.</p>
            )
          )}
        </Flex>

 
        </Fondo>

        <H1>EVENTOS FUTUROS</H1>
        <Div className="barra"/>
        <Fondo>
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-evenly' gap='1em'>
          {filtro === 'TODOS' ? (
            futuro.map((evento) => (
              <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
            ))
          ) : (
            (futuro.filter((evento) => evento.nombreTipo_evento === filtro).length > 0) ? (
              futuro
                .filter((evento) => evento.nombreTipo_evento === filtro)
                .map((evento) => (
                  <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
                ))
            ) : (
              <p>NO HAY EVENTOS DISPONIBLES PARA ESTE FILTRO.</p>
            )
          )}
        </Flex>
        </Fondo>

        <H1>EVENTOS PASADOS</H1>
        <Div className="barra"/>
        <Fondo>
        <Flex className='event-content' flex-wrap='wrap' justify-content='space-evenly' gap='1em'>
          {filtro === 'TODOS' ? (
            pasado.map((evento) => (
              <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
            ))
          ) : (
            (pasado.filter((evento) => evento.nombreTipo_evento === filtro).length > 0) ? (
              pasado
                .filter((evento) => evento.nombreTipo_evento === filtro)
                .map((evento) => (
                  <Evento key={evento.id} data={evento} onClick={() => navigate(`/detalle/${evento.id}`)} />
                ))
            ) : (
              <p>NO HAY EVENTOS DISPONIBLES PARA ESTE FILTRO.</p>
            )
          )}
        </Flex>
        </Fondo> 
        </> 
    )
}
export default HomeUser

const Div = styled.div`
  background-color:#000;
  height: 2em;
`

const Fondo = styled.div`
  background-color: #99956E;
  padding: 2em 1em;
  border: solid 0.2em #000;
`
const H1 = styled.h1`
    border: solid 0.1em #000;
    width: fit-content;
    padding: 10px;
`