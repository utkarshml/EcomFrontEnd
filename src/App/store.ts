import {combineReducers, configureStore } from '@reduxjs/toolkit'
import counter  from '../features/Counter'
import CartSlice from '../features/CartSlice'


const reducers = combineReducers({
    conter : counter.reducer,
    cart  : CartSlice.reducer
})
const store = configureStore({
    reducer:  reducers
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store