import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const QuestionView = () => {
  return (
    <div>
      <section className="questionCard">
        <section className="questionHeader">
          <aside className="questionVoteSymbols">
            <section className="upVote">
              <button>
                <FontAwesomeIcon icon={faCaretUp} className="upVoteIcon" />
              </button>
            </section>
            <p className="voteCount">0</p>
            <section className="downVote">
              <button>
                <FontAwesomeIcon icon={faCaretDown} className="downVoteIcon" />
              </button>
            </section>
          </aside>
          <section className="questionTandL">
            <section className="questionTitle">
              <Link>
                <h3>What is Javascript?</h3>
              </Link>
            </section>
            <section className="questionLanguage">
              <Link>Javascript</Link>
            </section>
            <section className="authorName">
              <p>Author Name</p>
            </section>
          </section>
        </section>
        <section className="questionText">
          <p>
            How do you expose a LINQ query as an ASMX web service? Usually, from
            the business tier, I can return a typed DataSet or DataTable which
            can be serialized for transport over ASMX. How can I do the same for
            a LINQ query? Is there a way to populate a typed DataSet or
            DataTable via a LINQ query? How can I get the result set of a LINQ
            query into a DataSet or DataTable? Alternatively, is the LINQ query
            serializable so that I can expose it as an ASMX web service?
          </p>
        </section>
      </section>
    </div>
  )
}

export default QuestionView
