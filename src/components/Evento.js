import { useState } from 'react'
import styled from 'styled-components'

// images
import Img from '../assets/images/img-article.jpeg'
import Confirm from './Confirm'
import Alert from './Alert'

const Evento = ({ data, onDelete }) => {
  const [ show, setShow ] = useState(false)
  const [ showAcept, setAceptShow ] = useState(false)

  const handleAlert = () => {
    setShow(!show)
    onDelete()
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
          setAceptShow(!showAcept)
        }}
      />
      <Article>
        <header className='header-article'> 
          <h3 className='article-component-type'>{data.type}</h3>
          <button onClick={handleAlert}>x</button>
        </header>
        
        <div className='img'>
          <img src={Img} alt='imagen' />
        </div>

        <h2 className='article-componente-rest'>{data.name}</h2>
        <h2 className='article-componente-rest'>{data.date}</h2>
      </Article>
    </>
  )
}

export default Evento

const Article = styled.article`
  width: 280px;
  border: solid 0.2em #000;
  border-radius: 2.5em;
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
`
