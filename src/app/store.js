import { apiSlice } from '../features/api/apiSlice'
import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice' //! remove from lesson01
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer, //! This is the original line, for testing
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})
