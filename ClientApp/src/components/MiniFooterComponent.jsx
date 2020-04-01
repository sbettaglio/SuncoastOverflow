import React from 'react'
import { Link } from 'react-router-dom'

const MiniFooterComponent = () => {
  return (
    <footer className="footer-links-container">
      <ul className="footer-links-list">
        <li>
          <Link to="/" className="footer-links">
            meta
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            chat
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            tour
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            help
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            blog
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            prviacy policy
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            legal
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            contact us
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            full site
          </Link>
        </li>
      </ul>
      <div className="footer-notes-container">
        <p className="footer-notes-text">
          2020 Stack Exchange, Inc. user contributions under
        </p>
        <Link to="/" className="footer-notes-link">
          &nbsp;cc by-sa 4.0
        </Link>
      </div>
    </footer>
  )
}

export default MiniFooterComponent
