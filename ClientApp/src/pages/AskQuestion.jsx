import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
const AskQuestion = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <>
      <h1>Ask a public question</h1>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Step 1: Draft your question</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            The Community is here to hel you with specific coding, algorithm, or
            language problems.
          </DropdownItem>
          <DropdownItem>1. Summarize the problem</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>3. Describe what you've tried</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Show some code</DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default AskQuestion
