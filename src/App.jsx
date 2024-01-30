import AddPostForm from './features/posts/AddPostForm'
// import Counter from './features/counter/Counter' //* removed from lesson01
import PostList from './features/posts/PostList'

function App() {
    return (
        <main className="App">
            {/* ! removed from lesson01, <Counter /> */}
            <AddPostForm />
            <PostList />
        </main>
    )
}

export default App
