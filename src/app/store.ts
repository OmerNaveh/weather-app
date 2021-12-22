import {  applyMiddleware, createStore} from '@reduxjs/toolkit';
import { weatherReducer } from '../reducers/reducers';
import { fetchData } from '../middleware/datafetch';
export const store = createStore(weatherReducer,applyMiddleware(fetchData))


