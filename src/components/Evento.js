import { useState } from 'react'
import styled from 'styled-components'
import Btn from './Btn'

// images
import Img from '../assets/images/img-article.jpeg'
import Confirm from './Confirm'
import { useNavigate } from 'react-router-dom'
import Alert from './Alert'

const Evento = ({ data, onDelete, showAlert, onClick}) => {
  const [ show, setShow ] = useState(false)
  const [ showAcept, setAceptShow ] = useState(false)
  const deleteButton = true
  const navigate = useNavigate()

  const handleAlert = () => {
    setShow(!show)
    //onDelete()
  }

  return(
    <>
      <Alert
        show={showAcept}
        onAcept={() => {
          setAceptShow(!showAcept)
        }}
        message='Evento eliminado correctamente'
      />

      <Confirm
        message='Esta seguro de eliminar este evento'
        show={show}
        onClose={() => setShow(!show)}
        onAcept={() => {
          console.log('enviado')
          setShow(!show)
          onDelete()
          setAceptShow(!showAcept)
          showAlert(true)
        }}
      />
      
      <Article>
        <header className='header-article'> 
          <h3 className='article-component-rest'>{data.nombreTipo_evento}</h3>
          {/* {buttonDelete && <button onClick={handleAlert}>x</button>} */}
        </header>
        
        <div className='img'>
          <img src={data.imagen} alt='imagen' />
        </div>

        <h2 className='article-componente-rest'>{data.nombre_evento}</h2>
        <h2 className='article-componente-rest'>{data.inicio_inscripcion}</h2>
        <div className='detalles-btn'>
          <br/>
          <Btn onClick={() => navigate(`eventos/detalle/${data.id}`)}>DETALLES</Btn>
        </div>
      </Article>
    </>
  )
}

export default Evento

const Article = styled.article`
  width: 280px;
  border: solid 0.2em #000;
  border-radius: 2.5em;
  background-color: #bdbb96;
  padding-bottom: 2em;

  .header-article{
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0.2em 1em 0.8em 1em;
    border-bottom: solid 0.2em #000;

    button{
      position: absolute;
      right: 0;
      font-size: 2.5625rem;
      background-color: transparent;
      border: none;
      font-weight: 800;
      bottom: -6px;
      right: 20px;
      cursor: pointer;
    }
  }

  .article-component-type{
    font-size: 0.75em;
    text-align: center;
  }

  .img{
    width: 100%;
    padding: 0.5em 1.4em;
    
    img{
      width: 100%;
      border: solid 0.2em #000;
    }
  }

  .article-componente-rest{
    text-align: center;
    font-weight: 400;
    font-size: 0%.8em;
  }

  .detalles-btn{
    text-align: center;
  }
`


