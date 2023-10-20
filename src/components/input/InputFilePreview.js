import React, { useState } from 'react'
import FileInput from './InputFile'
import Img from '../../assets/images/example-img.jpg'
import styled from 'styled-components';

const InputFilePreview = ({ name, buttonText, ...props }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setSelectedImage(e.target.result)
      };

      reader.readAsDataURL(file)
    } else {
      setSelectedImage(null)
    }
  }

  return (
    <Preview {...props}>      
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
        />
      ) : (
        <img
          src={Img}
          alt="Default"
        />
      )}
      <FileInput 
        name={name}
        accept="image/*"
        onChange={handleImageChange}
        buttonText={buttonText}
      />
    </Preview>
  );
};

export default InputFilePreview

const Preview = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  img{
    max-width: 100%;
    width: ${(props) => props.width || 'auto' };
  }
  label{
    margin-top: 0.6em;
    font-size: ${(props) => props['font-size'] || '' };
  }
`
