import React from 'react'
import transition from '../../transition'

const AccessibilityStatement = () => {
  return (
    <main className="container text-center legal-page-margin" dir="ltr" role="main">
      <header className="border-bottom pb-3 mb-4">
        <h1 className="display-4 fw-bold contact-text">Accessibility Statement</h1>
      </header>

      <section aria-label="Introduction">
        <p className="lead mb-5 text-start contact-text">
          Sequence is committed to making its website accessible to as many people as possible, regardless of ability or technology.
        </p>
      </section>

      <section aria-label="Accessibility Sections" className="text-start">
        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">1. Accessibility Goals</h2>
          <p>
            We aim to follow the WCAG 2.1 AA guidelines to ensure that our content is accessible to users with disabilities.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">2. Features Implemented</h2>
          <p>
            Our site supports keyboard navigation, readable text, and is compatible with screen readers. We continue to improve accessibility over time.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">3. Feedback</h2>
          <p>
            If you experience difficulty accessing any part of the website, please contact us and we will make every effort to accommodate your request.
          </p>
        </article>
      </section>

      <section aria-label="Contact Information" className="pt-4 border-top text-start contact-text">
        <h2 className="h5 fw-semibold mt-4">Contact</h2>
        <p>
          For accessibility support or feedback, email us at: <br />
          <a href="mailto:seq.video@gmail.com" className="text-decoration-none text-white">
            seq.video@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default transition(AccessibilityStatement)
