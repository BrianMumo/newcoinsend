import HeroBanner from '../components/HeroBanner'
import CTASection from '../components/CTASection'
import './Legal.css'

export default function CookiesPolicy() {
  return (
    <div className="legal-page">
      <HeroBanner title="Cookies Policy" subtitle="We use cookies to improve your experience, keep things secure, and understand how Coinsend is used." lastUpdated="April 30, 2026" />
      <section className="legal-content section">
        <div className="legal-content__inner container">
          <div className="legal-body">
            <h2>What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our platform, and improve your overall experience.</p>
            <h2>Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>These cookies are necessary for the platform to function properly. They enable core features such as security, authentication, and session management. Without these cookies, services you have requested cannot be provided.</p>
            <h3>Analytics Cookies</h3>
            <p>We use analytics cookies to understand how visitors interact with our platform. This helps us improve the user experience, identify popular features, and fix issues. All data collected is aggregated and anonymized.</p>
            <h3>Functional Cookies</h3>
            <p>Functional cookies remember your choices and preferences, such as your preferred language, currency, and display settings, to provide a more personalized experience.</p>
            <h3>Marketing Cookies</h3>
            <p>These cookies track your activity across websites and are used to deliver targeted advertisements relevant to you. We only use these with your consent.</p>
            <h2>How to Manage Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling essential cookies may impact the functionality of our platform.</p>
            <h2>Third-Party Cookies</h2>
            <p>Some cookies on our platform are set by third-party services we use, such as analytics providers and payment processors. These third parties have their own privacy policies governing how they use cookies.</p>
            <h2>Updates to This Policy</h2>
            <p>We may update this Cookies Policy from time to time to reflect changes in our practices or for regulatory reasons. We encourage you to review this policy periodically.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at privacy@coinsend.com.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
