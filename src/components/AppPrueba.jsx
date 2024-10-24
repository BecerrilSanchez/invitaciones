import React from 'react';
import { useApiKey } from '../context/ApiKeyContext';

const AppPrueba = () => {
  const apiKey = useApiKey();

  return (
    <div>
      <p>La API Key es: {apiKey}</p>
      {/* Aquí puedes usar la API key en tus requests o lógica */}
    </div>
  );
};

export default AppPrueba;
