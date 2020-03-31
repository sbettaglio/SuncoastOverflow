import React from 'react'

const AskQuestion = () => {
  return (
    <>
      <h1>Ask a public question</h1>
      <select className="question-dropdown">
        <option>Step 1: Draft your question</option>
        <option>1. Summarize the problem</option>
        <option>2. Describe what you've tried</option>
        <option>3. Show some code</option>
      </select>
    </>
  )
}

export default AskQuestion
