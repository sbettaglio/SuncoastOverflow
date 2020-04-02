import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SingleQuestion from '../components/SingleQuestion'
import MiniFooter from '../components/MiniFooterComponent'
import QuestionsMenu from '../components/QuestionsMenu'

const AllQuestions = () => {
  return (
    <>
      <main>
        <QuestionsMenu />
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
      <MiniFooter />
    </>
  )
}

export default AllQuestions
