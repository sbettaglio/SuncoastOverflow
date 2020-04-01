import axios from 'axios'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
const QuestionForm = () => {
  const [question, setQuestion] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
  })
  const updateQuestionData = e => {
    e.preventDefault()
    const key = e.target.name
    console.log(key)
    const value = e.target.value
    console.log(value)
    setQuestion(prevQuestion => {
      prevQuestion[key] = value
      return prevQuestion
    })
  }
  const addQuestionToApi = async () => {
    console.log('adding', question)
    const resp = await axios.post('api/Questions', question)
    console.log(resp)
    if (resp.status === 200) {
      // setWasSuccessfullyCreated({
      //   shouldRedirect: true,
      // })
      alert('Request submitted')
    } else {
      alert('Something went wrong. Please try again.')
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    )
  } else {
    return (
      <>
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
                name="Title"
                onChange={updateQuestionData}
              ></input>
            </section>
            <section>
              <h6>Body</h6>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                type="text"
                className="question-input"
                name="Asked"
                onChange={updateQuestionData}
              ></textarea>
            </section>
            <section>
              <h6>Tags</h6>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                placeholder="e.g. (c++ reactjs ios)"
                className="question-tag"
                name="Tag"
                onChange={updateQuestionData}
              ></input>
            </section>
          </div>
          <button className="submit-question" onClick={addQuestionToApi}>
            Post your question
          </button>
        </form>
      </>
    )
  }
}

export default QuestionForm
