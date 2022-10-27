import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);

  const [isLoading, setIsLoading] = useState(true)





  return (
    <StateContext.Provider value={{ currentCity, setCurrentCity, inputList, setInputList, isLoading, setIsLoading,}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
