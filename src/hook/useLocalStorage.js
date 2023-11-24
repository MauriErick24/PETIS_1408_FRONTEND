import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Obtener el valor del localStorage al iniciar
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Estado para almacenar el valor actual
  const [value, setValue] = useState(initial);

  // Función para guardar el valor en localStorage
  const saveValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Función para obtener el valor actual
  const getValue = () => {
    return value;
  };

  // Función para eliminar el valor del localStorage
  const removeValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  // Función para limpiar todo el localStorage
  const clearStorage = () => {
    setValue(null);
    localStorage.clear();
  };

  return {
    value,
    saveValue,
    getValue,
    removeValue,
    clearStorage,
  };
};

export default useLocalStorage;
