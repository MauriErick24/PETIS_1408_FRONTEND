import Flex from './Flex'
import styled from 'styled-components'

const HeaderArticles = ({ title, btnTitle, onClick }) => {
  return (
    <Div justify-content='space-between'>
      <div className='header-articles-title'>{title}</div>
      <button onClick={onClick}>{btnTitle}</button>
    </Div>
  )
}

export default HeaderArticles

const Div = styled(Flex)`
  .header-articles-title{
    font-size: 1.625rem;
    background-color: #eee;
    padding: 0.1em 1em 0.3em 0.3em;
    border: solid 0.12em #000;
    border-bottom: none;
  }

  button{
    color: white;
    font-size: 1.5rem;
    border-radius: 20px;
    padding: 0.1em 0.5em;
    border: none;
    background-color: #000;
    cursor: pointer;
  }
`
