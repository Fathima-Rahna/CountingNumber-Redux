import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count:0
},
  reducers: {
    increment: (state) => {
   
      state.count++
    },
    decrement: (state) => {
      state.count--
    },
    reset: (state) =>{
        return {...state,count:0}
    },
    
    incrementByAmount: (state, action) => {
      state.count += +action.payload
    }
  }
})


export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer