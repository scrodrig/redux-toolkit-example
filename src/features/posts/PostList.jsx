import { getPostError, getPostStatus, selectPostIds } from './postsSlice'

import PostExcerpt from './PostExcerpt'
import { useSelector } from 'react-redux'

const PostsList = () => {
    // const dispatch = useDispatch()

    const orderedPostsIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostStatus)
    const error = useSelector(getPostError)

    // useEffect(() => {
    //     if (postStatus === 'idle') {
    //         dispatch(fetchPosts())
    //     }
    // }, [postStatus, dispatch])

    let content
    if (postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {
        content = orderedPostsIds.map((postId) => <PostExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }

    return <section>{content}</section>
}
export default PostsList
