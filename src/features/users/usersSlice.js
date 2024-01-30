// cSpell:ignore reduxjs
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Obi wan Kenobi' },
    { id: '1', name: 'Luke Skywalker' },
    { id: '2', name: 'Yoda' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
