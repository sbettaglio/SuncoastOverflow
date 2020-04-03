import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const QuestionComponent = props => {
  // console.log(props)

  const { question } = props
  // console.log(banana)
  // console.log(question)

  const [newAnswerText, setNewAnswerText] = useState('')
  // const [questionScore, setQuestionScore] = useState(0)

  return (
    <div>
      <section className="questionCard">
        <section className="questionHeader">
          <aside className="questionVoteSymbols">
            <section className="upVote">
              <button>
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="upVoteIcon"
                  // onClick={updateQuestionScore()}
                />
              </button>
            </section>
            <p className="voteCount">{question.voteCount}</p>
            <section className="downVote">
              <button>
                <FontAwesomeIcon icon={faCaretDown} className="downVoteIcon" />
              </button>
            </section>
          </aside>
          <section className="questionTandL">
            <section className="questionTitle">
              <h3>{question.title}</h3>
            </section>
            <section className="questionLanguage">
              <Link>{question.tag}</Link>
            </section>
            <section className="authorName">
              <p>{question.author}</p>
            </section>
          </section>
        </section>
        <section className="questionText">
          <p>{question.asked}</p>
        </section>
      </section>
    </div>
  )
}

export default QuestionComponent
