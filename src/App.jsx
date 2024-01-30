import AddPostForm from './features/post/AddPostForm'
// import Counter from './features/counter/Counter' //* removed from lesson01
import PostList from './features/post/PostList'

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
