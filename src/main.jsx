import './index.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { fetchUsers } from './features/users/usersSlice.js'
import { store } from './app/store.js'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
