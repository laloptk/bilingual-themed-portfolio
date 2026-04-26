import { useState, useEffect } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved !== null) return saved === 'light';
  // First visit — pick randomly
  return Math.random() < 0.5;
};

const GlobalStateProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState({
    english: true,
    light: getInitialTheme(),
  });

  // Persist theme whenever it changes (covers both random init and manual toggle)
  useEffect(() => {
    localStorage.setItem('theme', globalVariable.light ? 'light' : 'dark');
  }, [globalVariable.light]);

  return (
    <GlobalStateContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
