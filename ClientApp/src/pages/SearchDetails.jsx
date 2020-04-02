import React from 'react'

const SearchDetails = () => {
  return (
    <li className="question-asked" id={results.id}>
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
        <a className="question-text" href="">
          {results.title}
        </a>
        <div className="category-container">
          <a href="" className="category">
            {results.tag}
          </a>
        </div>
        <div className="time-author-container">
          <p className="time-text">30 secs ago</p>
          <a className="author-text" href="">
            CleverGirl
          </a>
        </div>
      </div>
    </li>
  )
}

export default SearchDetails
