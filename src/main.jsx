import './index.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from './App.jsx'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { extendedApiSlice } from './features/posts/postsSlice.js'
import { fetchUsers } from './features/users/usersSlice.js'
import { store } from './app/store.js'

store.dispatch(fetchUsers())
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate())

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
)
