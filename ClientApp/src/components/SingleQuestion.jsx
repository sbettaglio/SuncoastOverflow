import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const SingleQuestion = props => {
  const { question } = props

  return (
    <li className="question-asked" key={question.id}>
      <aside className="upvote-comments">
        <section className="upvotes">
          <p className="upvote-count">{question.voteCount}</p>
          <FontAwesomeIcon icon={faCaretUp} className="upvote-icon" />
        </section>
        <section className="comments">
          <p className="comments-count">{question.answers.length}</p>
          <FontAwesomeIcon icon={faCommentDots} className="comments-icon" />
        </section>
      </aside>
      <div className="question-container">
        <Link to={`/question/${question.id}`}>{question.title}</Link>
        <div className="category-container">
          <a href="/" className="category">
            {question.tag}
          </a>
          <div className="time-author-container">
            <p className="time-text">30 secs ago</p>
            <a className="author-text" href="/">
              CleverGirl
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SingleQuestion
