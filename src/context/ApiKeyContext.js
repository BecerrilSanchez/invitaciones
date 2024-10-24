import React, { createContext, useContext } from "react";

// Crea el contexto
const ApiKeyContext = createContext();

// Proveedor del contexto
export const ApiKeyProvider = ({ children }) => {
  const apiKey = "da2-23mazg5i2bhfvl7zb4ka7au6eu"; // Aquí defines tu API key estática

  return (
    <ApiKeyContext.Provider value={apiKey}>{children}</ApiKeyContext.Provider>
  );
};

// Custom Hook para usar el contexto
export const useApiKey = () => {
  return useContext(ApiKeyContext);
};
