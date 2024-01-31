import './index.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from './App.jsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { fetchPosts } from './features/posts/postsSlice.js'
import { fetchUsers } from './features/users/usersSlice.js'
import { store } from './app/store.js'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    </Provider>,
)
