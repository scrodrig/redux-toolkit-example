import { createSlice, nanoid } from '@reduxjs/toolkit'

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
    reducers: {
        postAdded: {
            redurcer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    },
                }
            },
        },
    },
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postsSlice.actions //* actions are automatically generated by createSlice with the same name of reducers object

export default postsSlice.reducer
