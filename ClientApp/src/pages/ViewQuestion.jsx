import React from 'react'
import { Link } from 'react-router-dom'
import MiniFooterComponent from '../components/MiniFooterComponent'
import QuestionsMenu from '../components/QuestionsMenu'
import Answer from '../components/Answer'
import QuestionView from '../components/QuestionView'

const ViewQuestion = () => {
  return (
    <>
      <main className="viewQuestion">
        <QuestionsMenu />
        <QuestionView />
        <section className="answerCard">
          <h3>Answers: 5</h3>
          <Answer />
          <Answer />
          <Answer />
          <Answer />
          <Answer />
        </section>
        <section className="replyCard">
          <h3>Reply</h3>
          <textarea
            name=""
            id=""
            cols="40"
            rows="8"
            className="replyArea"
            placeholder="type your reply here . . ."
          ></textarea>
          <button>Submit Reply</button>
        </section>
      </main>
      <MiniFooterComponent />
    </>
  )
}

export default ViewQuestion
