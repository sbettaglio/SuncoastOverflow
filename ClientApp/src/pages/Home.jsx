import React from 'react'

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
            <a href="">Questions</a>
            <a href="">Jobs</a>
            <a href="">Developer Jobs</a>
            <a href="">Salary Calculator</a>
            <a href="">Help</a>
            <a href="">Mobile</a>
            <a href="">Disable Responsiveness</a>
          </section>
          <section className="linksCenter">
            <a href="">Teams</a>
            <a href="">Talent</a>
            <a href="">Advertising</a>
            <a href="">Enterprise</a>
          </section>
          <section className="linksRight">
            <a href="">About</a>
            <a href="">Questions</a>
            <a href="">Work Here</a>
            <a href="">Legal</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact Us</a>
          </section>
        </footer>
      </section>
    </>
  )
}
