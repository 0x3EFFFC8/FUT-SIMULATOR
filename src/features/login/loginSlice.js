import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valueL: false,
  valueR: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    ShowLogin: (state,action) => {
       state.valueL = action.payload; 
    },
    ShowRegister: (state,action) => {
       state.valueR = action.payload;
    },
  },
})

export const {ShowLogin,ShowRegister} = loginSlice.actions
export default loginSlice.reducer
