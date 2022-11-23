import { ADD_CITY, REMOVE_CITY, UNITS, CURRENT_CITY } from './actions';

export const initialState = {
	citiesList: [],
	units: 'metric',
	currentCity: null,
};

export const reducer = (state = initialState, action) => {
	if (action.type === ADD_CITY) {
		return {
			...state,
			citiesList: [...state.citiesList, action.payload],
		};
	}

	if (action.type === REMOVE_CITY) {
		return {
			...state,
			citiesList: action.payload,
		};
	}

	if (action.type === CURRENT_CITY) {
		return {
			...state,
			currentCity: action.payload,
		};
	}

	if (action.type === UNITS) {
		return {
			...state,
			units: action.payload,
		};
	}
	return state;
};
