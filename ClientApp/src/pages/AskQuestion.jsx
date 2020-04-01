import React from 'react'
import QuestionDropdown from '../components/QuestionDropdown'
import FooterComponent from '../components/FooterComponent'
import QuestionForm from '../components/QuestionForm'

const AskQuestion = () => {
  return (
    <>
      <main className="ask-question">
        <h4>Ask a public question</h4>
        <QuestionDropdown />
        <QuestionForm />
      </main>
      <FooterComponent />
    </>
  )
}

export default AskQuestion
