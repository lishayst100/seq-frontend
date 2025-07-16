import React from 'react'
import transition from '../../transition'

const TermsOfUse = () => {
  return (
    <main className="container  text-center legal-page-margin" dir="ltr" role="main">
      {/* כותרת ראשית */}
      <header className="border-bottom pb-3 mb-4">
        <h1 className="display-4 fw-bold contact-text">Terms of Use</h1>
      </header>

      {/* תיאור פתיחה */}
      <section aria-label="Introduction">
        <p className="lead mb-5 text-start contact-text">
          By using this website, you agree to the following terms and conditions. If you do not agree, please discontinue use of the site.
        </p>
      </section>

      {/* סעיפים */}
      <section aria-label="Terms Sections" className="text-start">
        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold  ps-3">
            1. Intellectual Property
          </h2>
          <p>
            All content, animations, graphics, and text on this site are the property of <strong>Sequence</strong> and may not be used, copied, or reproduced without our prior written consent.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold  ps-3">
            2. Use of Website
          </h2>
          <p>
            You agree not to misuse the website or attempt to damage, disable, or compromise its functionality or security in any way.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold  ps-3">
            3. Limitation of Liability
          </h2>
          <p>
            Sequence is not responsible for any damages, losses, or inconvenience resulting from use or inability to use the website or its content.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold  ps-3">
            4. External Links
          </h2>
          <p>
            The site may include links to third-party websites. We do not endorse or take responsibility for the content or privacy practices of those sites.
          </p>
        </article>

        <article className="mb-5 legal-text">
          <h2 className="h5 fw-semibold  ps-3">
            5. Modifications
          </h2>
          <p>
            We reserve the right to update or change these terms at any time. Continued use of the website indicates your acceptance of the updated terms.
          </p>
        </article>
      </section>

      {/* יצירת קשר */}
      <section aria-label="Contact Information" className="pt-4 border-top text-start contact-text">
        <h2 className="h5 fw-semibold mt-4">Contact</h2>
        <p>
          For questions regarding these terms, please contact us at: <br />
          <a href="mailto:seq.video@gmail.com" className="text-decoration-none text-white">
           seq.video@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
};


export default transition(TermsOfUse)