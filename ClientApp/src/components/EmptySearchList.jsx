import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

const EmptySearchList = () => {
  return (
    <li className="question-asked">
      <aside className="upvote-comments">
        <section className="upvotes">
          <p className="upvote-count">0</p>
          <FontAwesomeIcon icon={faCaretUp} className="upvote-icon" />
        </section>
        <section className="comments">
          <p className="comments-count">0</p>
          <FontAwesomeIcon icon={faCommentDots} className="comments-icon" />
        </section>
      </aside>
      <div className="question-container">
        <a className="question-text" href=""></a>
        <div className="category-container">
          <a href="" className="category"></a>
        </div>
        <div className="time-author-container">
          <p className="time-text"></p>
          <a className="author-text" href=""></a>
        </div>
      </div>
    </li>
  )
}

export default EmptySearchList
