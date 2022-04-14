import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: false
}

export const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    toogleDarkMode: state => ({ isDarkMode: !state.isDarkMode }),
    enableDarkMode: () => ({ isDarkMode: true }),
    disableDarkMode: () => ({ isDarkMode: false })
  }
})

export const { toogleDarkMode, enableDarkMode, disableDarkMode } =
  darkmodeSlice.actions

export const selectDarkmodeState = state => state.darkmode.isDarkMode

export default darkmodeSlice.reducer
