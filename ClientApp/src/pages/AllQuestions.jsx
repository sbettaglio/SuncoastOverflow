import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SingleQuestion from '../components/SingleQuestion'

const AllQuestions = () => {
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
        <header>
          <div className="search-bar-container">
            <section className="search-left">
              <h1 className="allquestions-text">All Questions</h1>
            </section>
            <object className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </object>
            <section className="search-right">
              <p className="show">show</p>
              <a className="display-category" href="">
                {' '}
                Newest
              </a>
            </section>
          </div>
        </header>
        <section className="question-list-container">
          <ul className="question-list">
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
          </ul>
        </section>
      </main>
      <footer className="footer-links-container">
        <ul className="footer-links-list">
          <li>
            <a className="footer-links" href="">
              meta
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              chat
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              tour
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              help
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              blog
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              prviacy policy
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              legal
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              contact us
            </a>
          </li>
          <li>
            <a className="footer-links" href="">
              full site
            </a>
          </li>
        </ul>
        <div className="footer-notes-container">
          <p className="footer-notes-text">
            2020 Stack Exchange, Inc. user contributions under
          </p>
          <a className="footer-notes-link" href="">
            &nbsp;cc by-sa 4.0
          </a>
        </div>
      </footer>
    </>
  )
}

export default AllQuestions
