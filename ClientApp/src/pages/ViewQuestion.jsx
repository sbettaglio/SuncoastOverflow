import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MiniFooterComponent from '../components/MiniFooterComponent'
import QuestionsMenu from '../components/QuestionsMenu'
import Answer from '../components/Answer'
import QuestionComponent from '../components/QuestionComponent'

const ViewQuestion = props => {
  const questionId = props.match.params.id
  const [question, setQuestion] = useState({})
  const [answer, setAnswer] = useState()
  console.log(question)

  const getQuestionData = async () => {
    const resp = await axios.get('/api/Questions/' + questionId)
    setQuestion(resp.data)
  }

  useEffect(() => {
    getQuestionData()
  }, [])

  const addAnswerToApi = async () => {
    console.log('adding', answer)
    const resp = await axios.post(`api/Questions/${questionId}/answers`, {
      response: answer,
    })
    console.log(resp.data)
  }

  return (
    <>
      <main className="viewQuestion">
        <QuestionsMenu />
        <QuestionComponent question={question} />
        <section className="answerCard">
          <h3>Answers:</h3>
          {/* <ul>
            {question.answers.map(answerList => {
              return <Answer key={questionId} answer={answerList.response} />
            })}
          </ul> */}
        </section>
        <section className="replyCard">
          <h3>Reply</h3>
          <textarea
            name="response"
            id=""
            cols="40"
            rows="8"
            className="replyArea"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder="type your reply here . . ."
            required
          ></textarea>
          <button onClick={addAnswerToApi}>Submit Reply</button>
        </section>
      </main>
      <MiniFooterComponent />
    </>
  )
}

export default ViewQuestion
