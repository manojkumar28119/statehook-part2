import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([])

  const onChangeName = event => setName(event.target.value)

  const onChangeCommentText = event => setCommentText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    setCommentList(prevCommentList => [
      ...prevCommentList,
      {id: uuidV4(), name, commentText},
    ])

    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(each => (
          <CommentItem commentDetails={each} key={each.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
