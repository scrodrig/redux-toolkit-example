import { Route, Routes } from 'react-router-dom'

import AddPostForm from './features/posts/AddPostForm'
import EditPostForm from './features/posts/EditPostForm'
import Layout from './components/Layout'
// import Counter from './features/counter/Counter' //* removed from lesson01
import PostList from './features/posts/PostList'
import SInglePostPage from './features/posts/SInglePostPage'

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
            </Route>
        </Routes>
    )
}

export default App
