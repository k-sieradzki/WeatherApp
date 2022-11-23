import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState, reducer } from './reducer';

const persistedState = localStorage.getItem('reduxState')
	? JSON.parse(localStorage.getItem('reduxState'))
	: initialState;

export const store = createStore(
	reducer,
	persistedState,
	composeWithDevTools()
);

store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
