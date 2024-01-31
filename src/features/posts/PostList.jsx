import { getPostError, getPostStatus, selectAllPosts } from './postsSlice'

import PostExcerpt from './PostExcerpt'
import { useSelector } from 'react-redux'

const PostsList = () => {
    // const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
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
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }

    return <section>{content}</section>
}
export default PostsList
