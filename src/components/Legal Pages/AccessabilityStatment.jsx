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
          This includes continuous efforts to ensure a better user experience for everyone.
        </p>
      </section>

      <section aria-label="Accessibility Sections" className="text-start">
        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">1. Accessibility Goals</h2>
          <p>
            We strive to meet WCAG 2.1 AA standards to ensure our content is perceivable, operable, understandable, and robust for users with disabilities.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">2. Features Implemented</h2>
          <ul>
            <li>Semantic HTML elements and appropriate ARIA roles to support assistive technologies.</li>
            <li>Keyboard navigation support for all interactive elements, including project filters and media grids.</li>
            <li>Clear focus indicators and logical tab order to improve usability for keyboard-only users.</li>
            <li>Accessible animated text with motion components that do not interfere with screen readers.</li>
            <li>Properly labeled sections and landmarks to help screen reader users navigate easily.</li>
            <li>Alternative text and ARIA labels for images and clickable items to describe their purpose.</li>
            <li>Responsive design ensuring readability and usability on various screen sizes and devices.</li>
          </ul>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">3. Ongoing Improvement and Feedback</h2>
          <p>
            Accessibility is an ongoing commitment. We welcome feedback from users experiencing difficulties and encourage them to contact us for assistance.
          </p>
        </article>
      </section>

      <section aria-label="Contact Information" className="pt-4 border-top text-start contact-text">
        <h2 className="h5 fw-semibold mt-4">Contact</h2>
        <p>
          For accessibility support or feedback, please email us at:<br />
          <a href="mailto:seq.video@gmail.com" className="text-decoration-none text-white">
            seq.video@gmail.com
          </a>
        </p>
      </section>
    </main>
  )
}

export default transition(AccessibilityStatement)
