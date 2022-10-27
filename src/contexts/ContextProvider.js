import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);


  const [metorimp, setMetorimp] = useState('metric')




  return (
    <StateContext.Provider value={{ currentCity, setCurrentCity, inputList, setInputList, metorimp, setMetorimp}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
