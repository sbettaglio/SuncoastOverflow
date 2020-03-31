import React from 'react'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <footer className="footerLinks">
      {/* <ul> */}
      {/* <li> */}
      <section className="linksLeft">
        <ul>
          <li>
            <Link to="/">Questions</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Developer Jobs</Link>
          </li>
          <li>
            <Link to="/">Salary Calculator</Link>
          </li>
          <li>
            <Link to="/">Help</Link>
          </li>
          <li>
            <Link to="/">Mobile</Link>
          </li>
          <li>
            <Link to="/">Disable Responsiveness</Link>
          </li>
        </ul>
      </section>
      {/* </li> */}
      {/* <li> */}
      <section className="linksCenter">
        <ul>
          <li>
            <Link to="/question">Teams</Link>
          </li>
          <li>
            <Link to="/">Talent</Link>
          </li>
          <li>
            <Link to="/">Advertising</Link>
          </li>
          <li>
            <Link to="/">Enterprise</Link>
          </li>
        </ul>
      </section>
      {/* </li> */}
      {/* </ul> */}
      <section className="linksRight">
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Questions</Link>
          </li>
          <li>
            <Link to="/">Work Here</Link>
          </li>
          <li>
            {' '}
            <Link to="/">Legal</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default footer
