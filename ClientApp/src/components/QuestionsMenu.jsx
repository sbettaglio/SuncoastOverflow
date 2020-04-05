import React from 'react'
import { Link } from 'react-router-dom'

const QuestionsMenu = () => {
  return (
    <>
      <nav className="menu-bar-nav">
        <ul className="menu-bar">
          <Link to="/AllQuestions/">
            <li className="questions tab">Questions</li>
          </Link>
          <li className="jobs tab">Jobs</li>
          <li className="tabs tab">Tabs</li>
          <li className="users tab">Users</li>
          <li className="badges tab">Badges</li>
          <Link to="/question">
            <li className="ask tab">Ask</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default QuestionsMenu
