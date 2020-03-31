import React from 'react'

const QuestionForm = () => {
  return (
    <>
      <form className="question-form">
        <div className="question-body">
          <section>
            <h6>Title</h6>
            <p>
              Be specific and imagine you're asking a question to another person
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
    </>
  )
}

export default QuestionForm
