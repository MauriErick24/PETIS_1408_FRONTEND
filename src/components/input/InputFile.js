import React from 'react'
import styled from 'styled-components'

const FileInput = ({ onChange, accept, buttonText, name, ...rest }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Puedes realizar cualquier lógica adicional con el archivo aquí
      console.log('Nombre del archivo seleccionado:', file.name);
    }
    onChange(e);
  };

  return (
    <FileInputContainer>
      <HiddenFileInput accept={accept} id={name} type="file" onChange={handleFileChange} {...rest} />
      <CustomButton htmlFor={name}>{buttonText}</CustomButton>
    </FileInputContainer>
  );
};

const FileInputContainer = styled.div`
  position: relative;
`

const HiddenFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`

const CustomButton = styled.label`
  background-color: black;
  color: white;
  padding: 0.4em 0.8em;
  border-radius: 2em;
  cursor: pointer;
  display: inline-block;
`

export default FileInput;
