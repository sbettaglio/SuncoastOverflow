import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

// apply base code for map all answers to answer component

const Answer = props => {
  const { response, id } = props

  const [voteCount, setVoteCount] = useState(props.voteCount)

  const addToVoteCount = () => {
    setVoteCount(prevVoteCount => {
      prevVoteCount += 1
      return prevVoteCount
    })
    sendUpVoteAnswerApi()
  }
  const subtractFromVoteCount = () => {
    setVoteCount(prevVoteCount => {
      prevVoteCount -= 1
      return prevVoteCount
    })
    sendDownVoteAnswerApi()
  }

  const sendUpVoteAnswerApi = async () => {
    const resp = await axios.put(`api/Answers/${id}/up`)
  }
  const sendDownVoteAnswerApi = async () => {
    const resp = await axios.put(`api/Answers/${id}/down`)
  }

  useEffect(() => {
    setVoteCount(voteCount)
  }, [voteCount])

  return (
    <li>
      <section className="answer">
        <aside className="questionVoteSymbols">
          <section className="upVote">
            <button>
              <FontAwesomeIcon
                icon={faCaretUp}
                className="upVoteIcon"
                onClick={addToVoteCount}
              />
            </button>
          </section>
          <p className="voteCount">{voteCount}</p>
          <section className="downVote">
            <button>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="downVoteIcon"
                onClick={subtractFromVoteCount}
              />
            </button>
          </section>
        </aside>
        <p className="response">
          {response}
          {/* The response to end all responses and forevermore tell you to suck it
          because you have no clue what you are doing. */}
        </p>
      </section>
      <section className="answerFooter">
        <section className="author">
          <p>Anonymous</p>
        </section>
        <section className="answerTime">
          {/* <p>answer.timeSubmitted</p> */}
        </section>
      </section>
    </li>
  )
}

export default Answer
