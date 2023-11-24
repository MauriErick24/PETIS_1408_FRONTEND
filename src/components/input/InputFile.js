// FileInput.js
import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';

const InputFile = ({ label, ...props }) => {
  const [field, , helpers] = useField(props);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Nombre del archivo seleccionado:', file.name);
      helpers.setValue(file);
    }
  };

  return (
    <FileInputContainer>
      <HiddenFileInput id={field.name} type="file" onChange={handleFileChange} {...props} />
      <CustomButton htmlFor={field.name}>{label}</CustomButton>
    </FileInputContainer>
  );
};

const FileInputContainer = styled.div`
  position: relative;
`;

const HiddenFileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const CustomButton = styled.label`
  background-color: black;
  color: white;
  padding: 0.4em 0.8em;
  border-radius: 2em;
  cursor: pointer;
  display: inline-block;
`;

export default InputFile;
