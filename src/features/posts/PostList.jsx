import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import { selectAllPosts } from './postsSlice'
import { useSelector } from 'react-redux'

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => {
        return (
            <article className="post" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p className="postCredit">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
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
