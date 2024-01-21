/* import { createStore } from 'redux'
import storeReducer from '../reducers'

const initialState = []

export const store = createStore(storeReducer, initialState) */

import {configureStore} from '@reduxjs/toolkit'
import favouritesReducer from '../slice/favouritesSlice'
import jobSearchReducer  from '../slice/jobSlice'

export const store = configureStore({
    reducer : {
        favourites : favouritesReducer,
        jobSearch : jobSearchReducer
    }
})