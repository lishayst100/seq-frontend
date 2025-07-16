import React from 'react'
import transition from '../../transition'

const PrivacyPolicy = () => {
  return (
    <main className="container text-center legal-page-margin" dir="ltr" role="main">
      <header className="border-bottom pb-3 mb-4">
        <h1 className="display-4 fw-bold contact-text">Privacy Policy</h1>
      </header>

      <section aria-label="Introduction">
        <p className="lead mb-5 text-start contact-text">
          This Privacy Policy explains how Sequence collects, uses, and protects the personal information you provide when using our website.
        </p>
      </section>

      <section aria-label="Privacy Sections" className="text-start">
        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">1. Information We Collect</h2>
          <p>
            When using our contact form, you may voluntarily provide your name, email, and message. This information is emailed directly to us and is not stored on our servers.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">2. How We Use the Information</h2>
          <p>
            We use the information only to respond to your inquiries. We do not sell, share, or store your data beyond email communication.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">3. Cookies</h2>
          <p>
            Our website may use basic cookies for functionality or analytics. No personal information is collected via cookies.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">4. Data Security</h2>
          <p>
            We follow standard email security practices. However, communication over the internet is never fully secure. Please do not send sensitive information via the contact form.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold ps-3">5. Your Rights</h2>
          <p>
            You can contact us at any time to request the deletion of your personal data.
          </p>
        </article>
      </section>

      <section aria-label="Contact Information" className="pt-4 border-top text-start contact-text">
        <h2 className="h5 fw-semibold mt-4">Contact</h2>
        <p>
          For questions about our privacy policy, email us at: <br />
          <a href="mailto:seq.video@gmail.com" className="text-decoration-none text-white">
            seq.video@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default transition(PrivacyPolicy)
