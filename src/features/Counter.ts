import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  value : 0   
}

const Counter = createSlice({
    name : "Cart",
    initialState,
    reducers :{
        increament : (state  ) =>{
             state.value += 1
        },
        decreament : (state) =>{
            state.value -= 1
       }
    }
})

export const {increament , decreament} = Counter.actions
export default Counter