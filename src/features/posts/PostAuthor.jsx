import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { selectAllUsers } from '../users/usersSlice'
import { useSelector } from 'react-redux'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find((user) => user.id === userId)

    return <span>by {author ? <Link to={`/user/${userId}`}>{author.name}</Link> : 'Unknown author'}</span>
}

PostAuthor.propTypes = {
    userId: PropTypes.number,
}

export default PostAuthor
