import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDAxNmMwNTgzNTAwMTg1MjMxODkiLCJpYXQiOjE3MDUwNjg4ODEsImV4cCI6MTcwNjI3ODQ4MX0.G_-PW894dZytylvJjgHxz9icbEcS-g5ov3WMSaovvQM',
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
