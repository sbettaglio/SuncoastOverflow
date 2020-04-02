import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuestionsMenu from '../components/QuestionsMenu'
import Search from '../components/Search'
import SingleQuestion from '../components/SingleQuestion'
import MiniFooter from '../components/MiniFooterComponent'

const AllQuestions = props => {
  // console.log(props)
  const [question, setQuestion] = useState([])

  const getQuestionData = async () => {
    const resp = await axios.get('/api/Questions/')
    console.log(resp.data)
    setQuestion(resp.data)
    console.log(question)
  }

  useEffect(() => {
    getQuestionData()
    // console.log(getQuestionData)
  }, [])

  return (
    <>
      <main>
        <QuestionsMenu />
        <Search />
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
