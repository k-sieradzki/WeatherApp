export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'
export const UNITS = 'UNITS'
export const CURRENT_CITY = 'CURRENT_CITY'

export const addCity = (city) => ({type: ADD_CITY, payload: city})
export const removeCity = (city) => ({type: REMOVE_CITY, payload: city})
export const units = (unit) => ({type: UNITS, payload: unit})
export const currentCity = (city) => ({type: CURRENT_CITY, payload: city})