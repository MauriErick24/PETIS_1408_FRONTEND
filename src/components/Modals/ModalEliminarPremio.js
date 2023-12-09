import React from 'react';
import Modal from 'react-modal';
import Btn from '../Btn';

const ModalEliminarPremio = ({ isOpen, onClose, onEliminar }) => {
  const handleEliminar = () => {
    // Lógica para eliminar el premio
    onEliminar();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Eliminar Premio"
      // Otras propiedades y estilos personalizados según tus necesidades
    >
      <h2>¿Estás seguro de que deseas eliminar este premio?</h2>
      <Btn onClick={handleEliminar}>Eliminar</Btn>
      <Btn onClick={onClose}>Cancelar</Btn>
    </Modal>
  );
};

export default ModalEliminarPremio;