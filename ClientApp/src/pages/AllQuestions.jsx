import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuestionsMenu from '../components/QuestionsMenu'
import SingleQuestion from '../components/SingleQuestion'
import MiniFooter from '../components/MiniFooterComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const AllQuestions = props => {
  console.log(props)
  const [question, setQuestion] = useState([])

  const getQuestionData = async () => {
    const resp = await axios.get('/api/Questions/')
    console.log(resp.data)
    setQuestion(resp.data)
  }

  useEffect(() => {
    getQuestionData()
  }, [])

  return (
    <>
      <main>
        <QuestionsMenu />
        <header>
          <div className="search-bar-container">
            <section className="search-left">
              <h1 className="allquestions-text">All Questions</h1>
            </section>
            <a href="/search" className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <section className="search-right">
              <p className="show">show</p>
              <a className="display-category"> Newest</a>
            </section>
          </div>
        </header>
        <section className="question-list-container">
          <ul className="question-list">
            {question.map(question => {
              return <SingleQuestion question={question} key={question.id} />
            })}
          </ul>
        </section>
      </main>
      <MiniFooter />
    </>
  )
}

export default AllQuestions
