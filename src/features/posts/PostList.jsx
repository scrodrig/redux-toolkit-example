import PostAuthor from './PostAuthor'
import { selectAllPosts } from './postsSlice'
import { useSelector } from 'react-redux'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post) => {
        return (
            <article className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                </p>
            </article>
        )
    })

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostList
