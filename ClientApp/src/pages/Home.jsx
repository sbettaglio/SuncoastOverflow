import React from 'react'
import { Link } from 'react-router-dom'

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
        <button className="whiteButton">For Developers</button>
        <button className="orangeButton">For Business</button>
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
          {/* icon */}
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
        <footer className="footerLinks">
          <section className="linksLeft">
            <Link to="/">Questions</Link>
            <Link to="/">Jobs</Link>
            <Link to="/">Developer Jobs</Link>
            <Link to="/">Salary Calculator</Link>
            <Link to="/">Help</Link>
            <Link to="/">Mobile</Link>
            <Link to="/">Disable Responsiveness</Link>
          </section>
          <section className="linksCenter">
            <Link to="/question">Teams</Link>
            <Link to="/">Talent</Link>
            <Link to="/">Advertising</Link>
            <Link to="/">Enterprise</Link>
          </section>
          <section className="linksRight">
            <Link to="/">About</Link>
            <Link to="/">Questions</Link>
            <Link to="/">Work Here</Link>
            <Link to="/">Legal</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Contact Us</Link>
          </section>
        </footer>
      </section>
    </>
  )
}
