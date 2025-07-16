import React from 'react'
import { useNavigate } from 'react-router-dom'

const LegalPagesLinks = () => {
  const nav = useNavigate()

  // הפונקציה שתאפשר גם לחיצה וגם מקש Enter
  const handleKeyPress = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      nav(path)
    }
  }

  return (
    <div className="d-flex flex-column gap-2">
      <span
        className="legal-links"
        role="link"
        tabIndex="0"
        onClick={() => nav('/privacyPolicy')}
        onKeyDown={(e) => handleKeyPress(e, '/privacyPolicy')}
      >
        Privacy Policy
      </span>

      <span
        className="legal-links"
        role="link"
        tabIndex="0"
        onClick={() => nav('/useOfTerms')}
        onKeyDown={(e) => handleKeyPress(e, '/useOfTerms')}
      >
        Terms of Use
      </span>

      <span
        className="legal-links"
        role="link"
        tabIndex="0"
        onClick={() => nav('/accessabilityStatment')}
        onKeyDown={(e) => handleKeyPress(e, '/accessabilityStatment')}
      >
        Accessibility Statement
      </span>
    </div>
  )
}

export default LegalPagesLinks
