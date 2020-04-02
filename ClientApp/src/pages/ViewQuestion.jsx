import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import SingleQuestion from '../components/SingleQuestion'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import MiniFooterComponent from '../components/MiniFooterComponent'

const ViewQuestion = () => {
  return (
    <>
      <main>
        <nav className="menu-bar-nav">
          <ul className="menu-bar">
            <li className="questions tab">Questions</li>
            <li className="jobs tab">Jobs</li>
            <li className="tabs tab">Tabs</li>
            <li className="users tab">Users</li>
            <li className="badges tab">Badges</li>
            <li className="ask tab">Ask</li>
          </ul>
        </nav>
        <li className="question-asked">
          <aside className="upvote-comments">
            <section className="upvotes">
              <FontAwesomeIcon icon={faCaretUp} className="upvote-icon" />
            </section>
            <p className="voteCount">0</p>
            <section className="upvotes">
              <FontAwesomeIcon icon={faCaretDown} className="upvote-icon" />
            </section>
          </aside>
          <div className="question-container">
            <a className="question-text" href="">
              What is Javascript?
            </a>
            <div className="category-container">
              <a href="" className="category">
                Javascript
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
      </main>
      <MiniFooterComponent />
    </>
  )
}

export default ViewQuestion
