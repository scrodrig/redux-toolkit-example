import PostAuthor from './PostAuthor'
import PropTypes from 'prop-types'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'

const PostExcerpt = ({ post }) => {
    return (
        <article className="post">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
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
    post: PropTypes.object.isRequired,
}

export default PostExcerpt
