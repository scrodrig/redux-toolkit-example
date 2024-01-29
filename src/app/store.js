import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice' //! remove from lesson01
import postReducer from '../features/post/postsSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer, //! This is the original line, for testing
        posts: postReducer,
    },
})
