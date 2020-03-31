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
        <button>For Developers</button>
        <button>For Business</button>
      </section>
      <section className="callToAction">
        <section className="ctaHead">
          <h1>For developers, by developers</h1>
          <hr />
          <p>
            Stack Overflow is an open community for anyone that codes. We help
            you get answers to your toughest coding questions, share knowledge
            with your coworkers in private, and find your next dream job.
          </p>
        </section>
        <section className="ctaCard">
          {/* icon */}
          <h2>
            Public Q<span>{'&'}</span>A
          </h2>
          <p>
            Get answers to more than 16.5 million questions and give back by
            sharing your knowledge with others. Sign up for an account.
          </p>
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
