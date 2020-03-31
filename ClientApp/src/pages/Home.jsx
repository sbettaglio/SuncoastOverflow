import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          We <span>{'<3'}</span> people who code
        </h1>
        <p>
          We build products that empower developers and connect them to
          solutions that enable productivity growth, and discovery.
        </p>
        <button className="whiteButton">For developers</button>
        <button className="orangeButton">For business</button>
      </section>
      <section className="callToAction">
        <section className="ctaHead">
          <h2>For developers, by developers</h2>
          <hr />
          <p>
            Stack Overflow is an{' '}
            <span className="orangeText">open community</span> for anyone that
            codes. We help you get answers to your toughest coding questions,
            share knowledge with your coworkers in private, and find your next
            dream job.
          </p>
        </section>
        <section className="ctaCard">
          <section className="icon-Homepage">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </section>
          <h3>
            Public Q<span>{'&'}</span>A
          </h3>
          <p>
            Get answers to more than 16.5 million questions and give back by
            sharing your knowledge with others.{' '}
            <span className="orangeText">Sign up</span> for an account.
          </p>
          <button className="browseQButton">Browse questions</button>
        </section>
      </section>
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
    </>
  )
}
