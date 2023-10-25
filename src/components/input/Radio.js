import styled from 'styled-components'
import Flex from '../Flex'

const Radio = ({ name, label, onChange, ...props }) => {
  return (
    <RadioStyle {...props}>
      <label className='radio' htmlFor={name}></label>
      <label className='radio-label' htmlFor={name}>{label}</label>
      <input type='radio' id={name} name={name} onClick={onChange} hidden />
    </RadioStyle>
  )
}

export default Radio

const RadioStyle = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-size: ${(props) => props['font-size'] || ''};

  .radio{
    font-size: ${(props) => props['font-size'] || ''};
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    border: solid 0.15em #00A79D;
    background-color: ${(props) => props.check ? '#00A79D' : 'white'};
    cursor: pointer;
  }

  .radio-label{
    font-size: ${(props) => props['font-size'] || ''};
    cursor: pointer;
  }
`
