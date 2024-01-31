import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import { selectPostById } from './postsSlice'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SInglePostPage = () => {
    const { postId } = useParams() //* useParams() returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <div className="postCredit">
                <Link to={`/post/edit/${post.id}`} className="button">
                    Edit Post
                </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>
            <p className="post-content">{post.body}</p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SInglePostPage
