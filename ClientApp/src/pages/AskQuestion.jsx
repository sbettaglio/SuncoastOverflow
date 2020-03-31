import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import QuestionDropdown from '../components/QuestionDropdown'
import { Link } from 'react-router-dom'
const AskQuestion = () => {
  return (
    <>
      <main className="ask-question">
        <h4>Ask a public question</h4>
        <QuestionDropdown />
        <form className="question-form">
          <div className="question-body">
            <section>
              <h6>Title</h6>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input
                className="title-input"
                type="text"
                placeholder="e.g Is there an R function for finding the index of an elements"
              ></input>
            </section>
            <section>
              <h6>Body</h6>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <input type="text" className="question-input"></input>
            </section>
            <section>
              <h6>Tags</h6>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                placeholder="e.g. (c++ reactjs ios)"
                className="question-tag"
              ></input>
            </section>
          </div>
          <button className="submit-question">Post your question</button>
        </form>
      </main>
      <footer className="footerLinks">
        {/* <ul> */}
        {/* <li> */}
        <section className="linksLeft">
          <ul>
            <li>
              <Link to="/">Questions</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/">Developer Jobs</Link>
            </li>
            <li>
              <Link to="/">Salary Calculator</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">Mobile</Link>
            </li>
            <li>
              <Link to="/">Disable Responsiveness</Link>
            </li>
          </ul>
        </section>
        {/* </li> */}
        {/* <li> */}
        <section className="linksCenter">
          <ul>
            <li>
              <Link to="/question">Teams</Link>
            </li>
            <li>
              <Link to="/">Talent</Link>
            </li>
            <li>
              <Link to="/">Advertising</Link>
            </li>
            <li>
              <Link to="/">Enterprise</Link>
            </li>
          </ul>
        </section>
        {/* </li> */}
        {/* </ul> */}
        <section className="linksRight">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Questions</Link>
            </li>
            <li>
              <Link to="/">Work Here</Link>
            </li>
            <li>
              {' '}
              <Link to="/">Legal</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </section>
      </footer>
    </>
  )
}

export default AskQuestion
