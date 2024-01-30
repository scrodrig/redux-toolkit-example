import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice' //! remove from lesson01
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer, //! This is the original line, for testing
        posts: postsReducer,
        users: usersReducer,
    },
})
