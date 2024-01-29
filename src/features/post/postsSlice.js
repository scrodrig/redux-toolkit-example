import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: 'First Post!',
        content: 'A long time ago in a galaxy far, far away...',
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'A long time ago in a galaxy far, far away...',
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer
