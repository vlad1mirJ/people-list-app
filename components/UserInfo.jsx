import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function UserInfo(props) {
  const params = useParams()
  const [comments, setComments] = useState(
    JSON.parse(localStorage.getItem(params.userId)) || []
  )
  const [userInput, setUserInput] = useState("")
  const [currentUser, setCurrentUser] = useState(
    props.users.filter((user) => user.id === params.userId)[0]
  )

  /* 

    If I will want to remove users.length > 0 in App component (Route path=':userId') 

    useEffect(() => {
      setCurrentUser(props.users.filter((user) => user.id === params.userId)[0])
    }, [props.users])

  */

  useEffect(() => {
    console.log(comments)
    localStorage.setItem(params.userId, JSON.stringify(comments))
  }, [comments])

  function handleClick() {
    if (userInput !== "") {
      setComments((prev) => [userInput, ...prev])
      setUserInput("")
      console.log(comments)
    }
  }

  function handleChange(e) {
    setUserInput((prev) => e.target.value)
  }

  return (
    currentUser && (
      <div className="user-info">
        <Link className="back-arrow" to="/">
          <img src="../src/backArrow.svg" alt="arrow pointing left" />
        </Link>
        <img src={currentUser.avatar} alt="" />
        <p>
          Full name: {currentUser.firstName} {currentUser.lastName}
        </p>
        <p>Job title: {currentUser.jobTitle}</p>
        <p>Email: {currentUser.email}</p>
        <p>Phone: {currentUser.phone}</p>
        <div className="comment-section">
          <h2>Leave a comment</h2>
          <textarea
            name="comment-input"
            id="comment-input"
            placeholder="Write your comment"
            onChange={(e) => handleChange(e)}
            value={userInput}
          />
          <button onClick={handleClick}>Submit comment</button>
          <div className="comments-display">
            {comments.length === 0 ? (
              <p className="no-comments">There are no comments</p>
            ) : (
              comments.map((cmnt, i) => {
                return (
                  <div key={i} className="comment">
                    {cmnt}
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default UserInfo
