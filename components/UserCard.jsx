import React from "react"
import { Link } from "react-router-dom"

function UserCard(props) {
  const { user } = props
  return (
    <div className="user-card">
      <div className="card-top">
        <img className="avatar" src={user.avatar} alt="" />
        <div className="card-info">
          <p className="full-name">
            {user.firstName} {user.lastName}
          </p>
          <p className="job-title">{user.jobTitle}</p>
        </div>
      </div>
      <Link className="more-details" to={user.id}>
        View more details
      </Link>
    </div>
  )
}

export default UserCard
