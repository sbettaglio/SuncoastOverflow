import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import FooterComponent from '../components/FooterComponent'

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
      <FooterComponent />
    </>
  )
}
