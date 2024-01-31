import { Route, Routes } from 'react-router-dom'

import AddPostForm from './features/posts/AddPostForm'
import EditPostForm from './features/posts/EditPostForm'
import Layout from './components/Layout'
import { Navigate } from 'react-router-dom'
// import Counter from './features/counter/Counter' //* removed from lesson01
import PostList from './features/posts/PostList'
import SInglePostPage from './features/posts/SInglePostPage'
import UserPage from './features/users/UserPage'
import UsersList from './features/users/UsersList'

function App() {
    return (
        // <main className="App">
        //     {/* ! removed from lesson01, <Counter /> */}
        //     <AddPostForm />
        //     <PostList />
        // </main>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PostList />}></Route>
                <Route path="post">
                    <Route index element={<AddPostForm />} />
                    <Route path=":postId" element={<SInglePostPage />} />
                    <Route path="edit/:postId" element={<EditPostForm />} />
                </Route>
                <Route path="user">
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<UserPage />} />
                </Route>
                {/** Catach all not matching */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default App
