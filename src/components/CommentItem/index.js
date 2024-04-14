// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, likeBtn, deleteBtn} = props

  const {comment, id, isLike, randomInitialColor, username} = commentDetails

  const likeImageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeActive = isLike ? 'active-btn' : null
  const isLikeBtn = () => {
    likeBtn(id)
  }

  const isDeleteBtn = () => {
    deleteBtn(id)
  }

  return (
    <li className="list">
      <div className="initial-name-container">
        <div className="initial-container">
          <h1 className={`${randomInitialColor} initial`}>
            {username[0].toUpperCase()}
          </h1>
        </div>
        <div className="name-comment-date-container">
          <div className="name-date-container">
            <p className="username">{username}</p>
            <p className="date">{commentDetails.newDate}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="delete-like-container">
        <div className="like-container">
          <img
            className="like-icon"
            src={likeImageUrl}
            alt="like"
            onClick={isLikeBtn}
          />
          <button type="button" className={likeActive} onClick={isLikeBtn}>
            Like
          </button>
        </div>
        <button type="button" data-testid="delete">
          <img
            onClick={isDeleteBtn}
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr" />
    </li>
  )
}

export default CommentItem
