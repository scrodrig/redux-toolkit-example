import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import PropTypes from 'prop-types'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import { selectPostById } from './postsSlice'
import { useSelector } from 'react-redux'

let PostExcerpt = ({ postId }) => {
    const post = useSelector((state) => selectPostById(state, postId))
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}> View Post </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

PostExcerpt.propTypes = {
    // ! This is the old way of doing things before we used the createEntityAdapter
    // post: PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired,
    //     content: PropTypes.string.isRequired,
    //     date: PropTypes.string.isRequired,
    //     userId: PropTypes.string.isRequired,
    //     reactions: PropTypes.objectOf(PropTypes.number).isRequired,
    // }).isRequired,
    postId: PropTypes.any.isRequired,
}

//! Allow not to rerender the component if the props are the same
//? PostExcerpt = React.memo(PostExcerpt)

export default PostExcerpt
