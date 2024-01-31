import { useDispatch, useSelector } from 'react-redux'

import { addNewPost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'
import { set } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AddPostForm = () => {
    const [title, setTitle] = useState('')

    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addTequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setUserId(e.target.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const canSave = [title, content, userId].every(Boolean) && addTequestStatus === 'idle'

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
                navigate('/')
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <button disabled={!canSave} type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm
