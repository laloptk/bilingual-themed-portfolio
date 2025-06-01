import React, { createContext, useState, useContext } from 'react';

export const GlobalStateContext = createContext();

// Provider Component
const GlobalStateProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState({english: true, light: true});

  return (
    <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
