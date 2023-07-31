import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice ({
  name: 'data',
  initialState: null,
  reducers: {
    setData: (state, action) => {
      return action.payload;
    }
  }
})

export const { setData } = dataSlice.action
export default dataSlice.reducers