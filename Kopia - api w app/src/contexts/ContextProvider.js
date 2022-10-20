import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  // const [currentCity, setCurrentCity] = useState(null);
  // const [lat, setLat] = useState(null)
  // const [lon, setLon] = useState(null)
  
  const [actualPage, setActualPage] = useState('')

  const [currentCity, setCurrentCity] = useState('Opoczno');
  const [lat, setLat] = useState('51.3753')
  const [lon, setLon] = useState('20.2787')
  
  const [inputList, setInputList] = useState([]);

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null)





  return (
    <StateContext.Provider value={{ currentCity, setCurrentCity,currentWeather, setCurrentWeather, forecast, setForecast, lat, setLat, lon, setLon, inputList, setInputList, actualPage, setActualPage }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
