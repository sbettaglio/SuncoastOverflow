import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SingleQuestion from './SingleQuestion'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForQuestions = async () => {
    const resp = axios.get(`/api/search/questions?search=${searchTerm}`)
    console.log(resp.data)
    setResults(resp.data)
  }

  return (
    <header>
      <div className="search-bar-container">
        <section className="search-left">
          <h1 className="allquestions-text">All Questions</h1>
        </section>
        <object className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </object>
        <input
          type="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={searchForQuestions}>Search</button>
        {results.map(results => {
          return <SingleQuestion results={results} id={results.id} />
        })}
        <section className="search-right">
          <p className="show">show</p>
          <a className="display-category" href="">
            {' '}
            Newest
          </a>
        </section>
      </div>
    </header>
  )
}

export default Search
