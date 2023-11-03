
Agregar iconos instalando fontawesome

npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

Importar modulos necesarios

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

Usarlos en un componente: 

function MyComponent() {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}