import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const ViewQuestion = () => {
  return (
    <>
      <main>
        <nav className="menu-bar-nav">
          <ul className="menu-bar">
            <li className="menu-bar-tab">Questions</li>
            <li className="menu-bar-tab">Jobs</li>
            <li className="menu-bar-tab">Tabs</li>
            <li className="menu-bar-tab">Users</li>
            <li className="menu-bar-tab">Badges</li>
            <li className="menu-bar-tab">Ask</li>
          </ul>
        </nav>
        <section className="questionTitle">
          <section className="qtLeft">
            <button>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <p>40</p>
            <button>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </section>
          <section className="qtRight">
            <h1>Brain Fart: What does javascript do?</h1>
            <p>C#</p>
          </section>
        </section>
      </main>
    </>
  )
}

export default ViewQuestion
