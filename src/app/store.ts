import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    // Todo init reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export { store };