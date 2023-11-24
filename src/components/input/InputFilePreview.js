// InputFilePreview.js
import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import InputFile from './InputFile';
import Img from '../../assets/images/example-img.jpg';
import styled from 'styled-components';

const InputFilePreview = ({ name, label, ...props }) => {
  const [field, , helpers] = useField(name);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (field.value) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };

      reader.readAsDataURL(field.value);
    } else {
      setPreviewImage(null);
    }
  }, [field.value]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    helpers.setValue(file);
  };

  return (
    <Preview {...props}>
      {previewImage ? (
        <img src={previewImage} alt="Selected" />
      ) : (
        <img src={Img} alt="Default" />
      )}
      <InputFile label={label} name={name} onChange={handleImageChange} />
    </Preview>
  );
};

export default InputFilePreview;

const Preview = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
  }
  label {
    margin-top: 0.6em;
    font-size: ${(props) => props['font-size'] || ''};
  }
`;
