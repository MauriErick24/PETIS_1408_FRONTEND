import Layout from "../components/input/Layout";
import React from 'react';


function VentanaBotones() {
  return (
    <Layout
      sidebarContent={
        <div>
          {/* Contenido específico del Sidebar para Vista1 */}
          <h3>Sidebar de Vista 1</h3>
          <p>Opciones de Vista 1</p>
        </div>
      }
      content={
        <div>
          {/* Contenido específico del Content para Vista1 */}
          <h3>Contenido Principal de Vista</h3>
        </div>
      }
    />
  );
}

export default VentanaBotones;
