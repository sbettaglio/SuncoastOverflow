import React, { useState } from 'react'
import axios from 'axios'
import QuestionsMenu from '../components/QuestionsMenu'
import SearchDetails from './SearchDetails'
import EmptySearchList from '../components/EmptySearchList'
import MiniFooter from '../components/MiniFooterComponent'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForQuestions = async () => {
    const resp = await axios.get(
      `/api/search/questions?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <>
      <main>
        <QuestionsMenu />
        <header>
          <div className="search-bar-container-for-search">
            <section className="search-left">
              <input
                type="search"
                className="search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </section>
            <button onClick={searchForQuestions}>Search</button>
            <section className="search-right">
              <a href="/allquestions" className="display-category-for-search">
                Cancel
              </a>
            </section>
          </div>
        </header>
        <section className="question-list-container">
          <ul className="question-list">
            {results.length > 0 ? (
              <SearchDetails results={results} />
            ) : (
              <EmptySearchList />
            )}
          </ul>
        </section>
      </main>
      <MiniFooter />
    </>
  )
}

export default Search
