import React from 'react'

const AllQuestions = () => {
  return (
    <>
      <main>
        <nav className="menu-bar-nav">
          <ul className="menu-bar">
            <li className="menu-bar-tab">Questions</li>
            <li className="menu-bar-tab">Jobs</li>
            <li className="menu-bar-tab">Tabs</li>
            <li className="menu-bar-tab">Users</li>
            <li className="menu-bar-tab">Badges</li>
            <li className="menu-bar-tab">Ask</li>
          </ul>
        </nav>
        <header>
          <div className="search-bar-container">
            <section className="search-left">
              <h1 className="allquestions-text">All Questions</h1>
            </section>
            <img src="" alt="search icon" />
            <section className="search-right">
              <p>show Newest</p>
            </section>
          </div>
        </header>
        <section></section>
      </main>
    </>
  )
}

export default AllQuestions
