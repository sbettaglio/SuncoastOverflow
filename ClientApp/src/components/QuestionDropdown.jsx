import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const QuestionDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(prevState => !prevState)
  return (
    <div className="question-dropdown">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Step 1: Draft your question </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            The Community is here to hel you with specific coding, algorithm, or
            language problems.
          </DropdownItem>
          <DropdownItem>1. Summarize the problem</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>2. Describe what you've tried</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>3. Show some code</DropdownItem>
          <DropdownItem divider />
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default QuestionDropdown
